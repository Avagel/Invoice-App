import { ChevronLeft } from "lucide-react";
import React, { useRef, useState } from "react";
import Input from "./Input";
import ListItem from "./ListItem";
import Button from "./Button";

const CreateInvoice = ({ setIsCreateOpen, setInvoices, updateLocal }) => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (status) => {
    // skip validation for drafts
    if (status !== "draft") {
      const newErrors = validate();
      if (Object.keys(newErrors).length > 0) {
        console.log("error");
        setErrors(newErrors);
        return; // stop submission
      }
    }
    setErrors({});
    const id = crypto.randomUUID();
    const date = formRef.current.toInvoiceDate.value;
    const paymentTerms = formRef.current.paymentTerms.value;
    const invoiceName = formRef.current.projectDescription.value;
    const projectDescription = formRef.current.projectDescription.value;
    let items = [];
    const listItems = itemsRef.current.querySelectorAll(".listItem");
    listItems.forEach((itm, index) => {
      const name = formRef.current.elements["itmName"][index]
        ? formRef.current.elements["itmName"][index].value
        : formRef.current.elements["itmName"].value;
      const quantity = formRef.current.elements["itmQuantity"][index]
        ? formRef.current.elements["itmQuantity"][index].value
        : formRef.current.elements["itmQuantity"].value;
      const price = formRef.current.elements["itmPrice"][index]
        ? formRef.current.elements["itmPrice"][index].value
        : formRef.current.elements["itmPrice"].value;
      items.push({
        id: crypto.randomUUID(),
        name,
        quantity,
        price,
      });
    });

    const sender = {
      street: formRef.current.fromAddress.value,
      city: formRef.current.fromCity.value,
      postCode: formRef.current.fromPostCode.value,
      country: formRef.current.fromCountry.value,
    };
    const receiver = {
      name: formRef.current.toName.value,
      email: formRef.current.toEmail.value,
      street: formRef.current.toAddress.value,
      city: formRef.current.toCity.value,
      postCode: formRef.current.toPostCode.value,
      country: formRef.current.toCountry.value,
    };

    const newInvoice = {
      id,
      projectDescription,
      paymentTerms,
      date,
      invoiceName,
      status,
      sender,
      receiver,
      items,
    };

    setInvoices((prev) => {
      const updated = [...prev, newInvoice];
      localStorage.setItem("invoices", JSON.stringify(updated));

      return updated;
    });

    alert("added");
    setIsCreateOpen(false);

    formRef.current.preventDefault();
  };

  const validate = () => {
    const f = formRef.current;
    const newErrors = {};

    // Bill From
    if (!f.fromAddress.value.trim())
      newErrors.fromAddress = "Street address is required";
    if (!f.fromCity.value.trim()) newErrors.fromCity = "City is required";
    if (!f.fromPostCode.value.trim())
      newErrors.fromPostCode = "Post code is required";
    if (!f.fromCountry.value.trim())
      newErrors.fromCountry = "Country is required";

    // Bill To
    if (!f.toName.value.trim()) newErrors.toName = "Client name is required";
    if (!f.toEmail.value.trim()) newErrors.toEmail = "Client email is required";
    else if (!/\S+@\S+\.\S+/.test(f.toEmail.value))
      newErrors.toEmail = "Invalid email address";
    if (!f.toAddress.value.trim())
      newErrors.toAddress = "Street address is required";
    if (!f.toCity.value.trim()) newErrors.toCity = "City is required";
    if (!f.toPostCode.value.trim())
      newErrors.toPostCode = "Post code is required";
    if (!f.toCountry.value.trim()) newErrors.toCountry = "Country is required";

    // Invoice details
    if (!f.toInvoiceDate.value)
      newErrors.toInvoiceDate = "Invoice date is required";
    if (!f.paymentTerms.value)
      newErrors.paymentTerms = "Payment terms are required";
    if (!f.projectDescription.value.trim())
      newErrors.projectDescription = "Project description is required";

    // Items
    if (_items.length === 0) {
      newErrors.items = "Add at least one item";
    } else {
      _items.forEach((itm, index) => {
        if (!itm.name?.trim())
          newErrors[`item_${index}_name`] = "Item name is required";
        if (!itm.quantity || itm.quantity <= 0)
          newErrors[`item_${index}_quantity`] = "Invalid quantity";
        if (!itm.price || itm.price <= 0)
          newErrors[`item_${index}_price`] = "Invalid price";
      });
    }

    return newErrors;
  };

  const [_items, setItems] = useState([{ id: 0 }]);
  const itemsRef = useRef();

  const handleCreateItems = () => {
    setItems((prev) => {
      return [...prev, { id: crypto.randomUUID() }];
    });
  };

  return (
    <div className="absolute h-full  rounded-r-xl w-inherit inset-0  bg-zinc-950/50 overflow-auto z-3">
      <form
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
        className="max-w-150 bg-custom-bg-card dark:bg-custom-bg-white oveflow-hidden rounded-r-xl  oveflow-auto"
      >
        <div className="p-6">
          <button
            className="flex items-center gap-6 my-2 mb-8 hover:text-custom-accent"
            onClick={() => {
              setIsCreateOpen((prev) => !prev);
            }}
          >
            <ChevronLeft size={15} className="text-custom-accent" />
            <p className="bold">Go back</p>
          </button>
          <h1>New Invoice</h1>
          <div className="flex flex-col gap-6 mt-6">
            <p className="text-custom-accent">Bill From</p>

            <Input
              label={"Street Address"}
              name={"fromAddress"}
              placeholder={"Enter Street Address"}
            />

            <div className="flex  justify-between gap-6">
              <Input
                label={"City"}
                name={"fromCity"}
                type="text"
                placeholder={"London"}
              />
              <Input
                label={"Post Code"}
                name={"fromPostCode"}
                type="text"
                placeholder={"E3 3EZ"}
              />
            </div>
            <Input
              label={"Country"}
              name={"fromCountry"}
              type="text"
              placeholder={"E3 3EZ"}
            />

            <p className="text-custom-accent">Bill To</p>
            <Input
              label={"Client's Name"}
              name={"toName"}
              type="text"
              placeholder={"E3 3EZ"}
            />
            <Input
              label={"Client's Email"}
              name={"toEmail"}
              type="text"
              placeholder={"E3 3EZ"}
            />
            <Input
              label={"Street Address"}
              name={"toAddress"}
              type="text"
              placeholder={"E3 3EZ"}
            />

            <div className="flex  justify-between gap-6">
              <Input
                label={"City"}
                type="text"
                name={"toCity"}
                placeholder={"London"}
              />
              <Input
                label={"Post Code"}
                type="text"
                name={"toPostCode"}
                placeholder={"E3 3EZ"}
              />
            </div>
            <Input
              label={"Country"}
              type="text"
              name={"toCountry"}
              placeholder={"E3 3EZ"}
            />

            <Input label={"Invoice Date"} type="date" name={"toInvoiceDate"} />
            <Input
              label={"Payment Terms"}
              type="select"
              name={"paymentTerms"}
              placeholder={"E3 3EZ"}
              options={["Net 1 Day", "Net 14 Day", "Net 30 Day"]}
            />

            <Input
              label={"Project Description"}
              name={"projectDescription"}
              type="text"
              placeholder={"Graphics Design"}
            />
          </div>

          <h2 className="text-[#777F98] text-[18px] font-bold mt-17.25">
            Item List
          </h2>
          <div ref={itemsRef} className="flex flex-col mt-5.5 gap-12.25 mb-12">
            {_items.map((itm) => {
              return (
                <ListItem key={itm.id} setItems={setItems} defaultValue={itm} />
              );
            })}
          </div>

          <Button
            type="edit"
            text={"+ Add New Item"}
            full={true}
            onClick={handleCreateItems}
          />
        </div>

        {/* {Object.keys(errors).length > 0 && (
          <p className="text-custom-error text-center">
            {errors}
          </p>
        )} */}

        <footer className="p-6 flex gap-2 mt-14 shadow-[0px_0px_10px_rgba(72,84,159,0.1)] items-center justify-center bg-custom-bg-card md:bg-custom-bg-white sticky bottom-0">
          <div className="md:mr-auto">
            <Button
              type="edit"
              text="Discard"
              onClick={() => {
                setIsCreateOpen(false);
              }}
            />
          </div>
          <Button
            type="draft"
            text="Save as Draft"
            onClick={() => {
              handleSubmit("draft");
            }}
          />
          <Button
            type="regular"
            text="Save & Send"
            onClick={() => {
              handleSubmit("pending");
            }}
          />
        </footer>
      </form>
    </div>
  );
};

export default CreateInvoice;
