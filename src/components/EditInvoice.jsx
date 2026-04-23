import { ChevronLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import ListItem from "./ListItem";
import Button from "./Button";

const EditInvoice = ({
  setIsEditOpen,
  defaultValues,
  setInvoices,
  updateLocal,
}) => {
  const [errors, setErrors] = useState({});
  const [baseData, setBaseData] = useState(defaultValues);
  const [_items, setItems] = useState(defaultValues.items);
  console.log(_items);
  console.log(defaultValues);
  const formRef = useRef(null);
  const itemsRef = useRef(null);

  const {
    id,
    date,
    projectDescription,
    paymentTerms,
    invoiceName,
    status,
    sender,
    receiver,
    items,
  } = baseData;

  const handleAddItem = () => {
    setItems((prev) => {
      return [...prev, {}];
    });
  };

  const validate = (_items) => {
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
    if (!f.invoiceDate.value || f.invoiceDate.value.trim() == "")
      newErrors.invoiceDate = "Invoice date is required";
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
  const handleEdit = () => {
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

    const newErrors = validate(items);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // stop submission
    }
    setErrors({});

    const date = formRef.current.invoiceDate.value;
    const paymentTerms = formRef.current.paymentTerms.value;
    const invoiceName = formRef.current.projectDescription.value;
    const projectDescription = formRef.current.projectDescription.value;
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

    const editedInvoice = {
      id: id,
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
      const updated = prev.map((invoice) => {
        return invoice.id == id ? editedInvoice : invoice;
      });
      localStorage.setItem("invoices", JSON.stringify(updated));
      return updated;
    });

    alert("edited");
    setIsEditOpen(false);
  };

  return (
    <div className="absolute h-full rounded-r-xl  w-inherit inset-0  bg-black/50  overflow-auto">
      <div className="max-w-154 bg-custom-bg-white  rounded-r-xl">
        <div className="p-6">
          <button
            className="flex items-center gap-6 my-2 mb-8"
            onClick={() => {
              setIsEditOpen((prev) => !prev);
            }}
          >
            <ChevronLeft size={15} className="text-custom-accent" />
            <p className="bold">Go back</p>
          </button>
          <h1>
            Edit <span className="text-custom-text-tertiary">#</span>XM9141
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            ref={formRef}
            className="flex flex-col gap-6 mt-6"
          >
            <p className="text-custom-accent">Bill From</p>

            <Input
              label={"Street Address"}
              name={"fromAddress"}
              defaultValue={sender.street}
              type="text"
              focus={true}
              placeholder={"Enter Street Address"}
              error={errors?.fromAddress}
            />

            <div className="flex  justify-between gap-6">
              <Input
                label={"City"}
                name={"fromCity"}
                type="text"
                placeholder={"London"}
                defaultValue={sender.city}
                error={errors?.fromCity}
              />
              <Input
                label={"Post Code"}
                type="text"
                name={"fromPostCode"}
                placeholder={"E3 3EZ"}
                defaultValue={sender.postCode}
                error={errors?.fromPostCode}
              />
            </div>
            <Input
              label={"Country"}
              name={"fromCountry"}
              defaultValue={sender.country}
              type="text"
              placeholder={"E3 3EZ"}
              error={errors?.fromCountry}
            />

            <p className="text-custom-accent">Bill To</p>
            <Input
              label={"Client's Name"}
              name={"toName"}
              defaultValue={receiver.name}
              type="text"
              placeholder={"E3 3EZ"}
              error={errors?.toName}
            />
            <Input
              label={"Client's Email"}
              name={"toEmail"}
              defaultValue={receiver.email}
              type="text"
              placeholder={"E3 3EZ"}
              error={errors?.toEmail}
            />
            <Input
              label={"Street Address"}
              name={"toAddress"}
              defaultValue={receiver.street}
              type="text"
              placeholder={"E3 3EZ"}
              error={errors?.toAddress}
            />

            <div className="flex  justify-between gap-6">
              <Input
                label={"City"}
                type="text"
                placeholder={"London"}
                name={"toCity"}
                defaultValue={receiver.city}
                error={errors?.toCity}
              />
              <Input
                label={"Post Code"}
                type="text"
                placeholder={"E3 3EZ"}
                name={"toPostCode"}
                defaultValue={receiver.postCode}
                error={errors?.toPostCode}
              />
            </div>
            <Input
              label={"Country"}
              type="text"
              placeholder={"E3 3EZ"}
              name={"toCountry"}
              defaultValue={receiver.country}
              error={errors?.toCountry}
            />

            <Input
              label={"Invoice Date"}
              type="date"
              name={"invoiceDate"}
              error={errors?.invoiceDate}
              defaultValue={date}
            />
            <Input
              label={"Payment Terms"}
              name={"paymentTerms"}
              defaultValue={paymentTerms}
              type="select"
              placeholder={"E3 3EZ"}
              options={["Next 1 Day", "Next 14 Day", "Next 30 Day"]}
              error={errors?.paymentTerms}
            />

            <Input
              label={"Project Description"}
              type="text"
              name={"projectDescription"}
              defaultValue={projectDescription}
              placeholder={"Graphics Design"}
              error={errors?.projectDescription}
            />
            <h2 className="text-custom-text-secondary text-[18px] font-bold mt-17.25">
              Item List
            </h2>
            <div
              ref={itemsRef}
              className="flex flex-col mt-5.5 gap-12.25 mb-12"
            >
              {_items?.map((itm, index) => {
                return (
                  <ListItem
                    key={itm.id}
                    setItems={setItems}
                    defaultValue={itm}
                  />
                );
              })}
            </div>

            <Button
              type="edit"
              text={"+ Add New Item"}
              full={true}
              onClick={handleAddItem}
            />
          </form>
        </div>

        <footer className="bg-custom-bg-card p-6 flex gap-2 mt-14 shadow-[0px_0px_10px_rgba(72,84,159,0.1)] items-center justify-center md:justify-end sticky bottom-0">
          <Button
            type="edit"
            text="Cancel"
            onClick={() => {
              setIsEditOpen((prev) => !prev);
            }}
          />
          <Button type="regular" text="Save Changes" onClick={handleEdit} />
        </footer>
      </div>
    </div>
  );
};

export default EditInvoice;
