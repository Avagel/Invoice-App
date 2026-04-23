import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import StatusCard from "../components/StatusCard";
import Button from "../components/Button";
import EditInvoice from "../components/EditInvoice";

const InvoiceDetail = ({ invoices, setInvoices, updateLocal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  // const [invoices, setInvoices] = useState(
  //   JSON.parse(localStorage.getItem("invoices")),
  // );

  const [data, setData] = useState(location.state);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    if (location.state && location.state.length) {
    } else {
      setData(invoices.find((invoice) => invoice.id == params.id));
    }
    if (data && data.length) {
      setData(invoices.find((invoice) => invoice.id == params.id));
    }
  }, [invoices]);

  const handleDelete = () => {
    setInvoices((prev) => {
      const updated = prev.filter((invoice) => invoice.id !== data.id);
      localStorage.setItem("invoices", JSON.stringify(updated));
      return updated;
    });
    alert("deleted" + data.invoiceName);
    navigate("/");
  };

  const handleMarkPaid = () => {
    setInvoices((prev) => {
      const invoi = prev.filter((inv) => inv.id == data.id);
      // setData((prev) => {
      //   return {
      //     ...prev,
      //     status: "paid",
      //   };
      // });
      invoi[0].status = "paid";
      const updated = [
        ...prev,
        {
          ...invoi[0],
        },
      ];
      localStorage.setItem("invoices", JSON.stringify(updated));
      return updated;
    });
  };

  const {
    id,
    date,
    projectDescription,
    invoiceName,
    status,
    sender,
    receiver,
    items,
    total,
  } = data || {};
  console.log(items);

  return (
    <div className="w-full flex flex-col ">
      <div className="flex-1 min-h-0 overflow-auto">
        <div className="flex-1 flex flex-col gap-6 p-6">
          <button
            className="flex items-center gap-6 my-2 mb-8"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ChevronLeft size={15} className="text-custom-accent" />
            <p className="bold">Go back</p>
          </button>

          <section className="card flex items-center justify-between text-custom-text-secondary">
            <div className="flex items-center w-full justify-between md:w-fit md:gap-5">
              <p className="little">Status</p>
              <StatusCard status={status} />
            </div>
            <div className="gap-2 items-center justify-center hidden md:flex">
              <Button
                type="edit"
                text="Edit"
                onClick={() => {
                  setIsEditOpen((prev) => !prev);
                }}
              />
              <Button type="error" text="Delete" onClick={handleDelete} />
              <Button
                type="regular"
                text="Mark as Paid"
                onClick={handleMarkPaid}
              />
            </div>
          </section>

          <div className="card grid grid-cols-2  gap-7.5 md:grid-cols-4">
            <div className="col-span-2 md:col-span-4  md:flex md:items-start md:justify-between ">
              <p className="little text-custom-text-tertiary font-bold">
                <span className="text-custom-secondary"># </span>
                {id}
                <br />
                {invoiceName}
              </p>

              <div className="mt-7.5 md:mt-0">{""}</div>
            </div>

            <div>
              <div className="flex flex-col gap-7.5">
                <div>
                  <p className="little text-custom-text-tertiary">
                    Invoice Date
                  </p>
                  <p className="bold mt-3">30 Aug 3030</p>
                </div>
                <div>
                  <p className="little text-custom-text-tertiary">
                    Payment Due
                  </p>
                  <p className="bold mt-3">3{date}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="little text-custom-text-tertiary">Bill To</p>
              <p className="bold mt-3">{receiver?.name}</p>
              <p className="little mt-1.5 text-custom-text-tertiary">
                {receiver?.address}
              </p>
            </div>

            <div className="col-span-2 row-start-3 md:row-start-2 md:col-start-3">
              <p className="little text-custom-text-tertiary">Sent to</p>
              <p className="bold mt-3">{receiver?.email}</p>
            </div>

            <div className="col-span-2 row-start-4 md:col-span-4 rounded-lg overflow-hidden bg-custom-tetiary">
              <div className="p-6 md:hidden flex flex-col gap-6">
                {items?.map((itm) => {
                  return <ItemCardMobile key={itm.id} data={itm} />;
                })}
              </div>

              <div className="p-6 grid-cols-4 text-right gap-6 hidden md:grid">
                <p className="little text-left  text-custom-text-tertiary">
                  item Name
                </p>
                <p className="little text-custom-text-tertiary">QTY.</p>
                <p className="little text-custom-text-tertiary">Price</p>
                <p className="little text-custom-text-tertiary">Total</p>
                {items?.map((itm) => {
                  console.log(itm);
                  return <ItemCard key={itm.id} data={itm} />;
                })}
              </div>

              <div className="p-6 bg-custom-bg-card flex items-center justify-between tb">
                <p className="little text-white">Amount Due</p>
                <h1 className="text-white">£ {total}</h1>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-custom-bg-card p-6 flex gap-2 mt-14 shadow-[0px_0px_10px_rgba(72,84,159,0.1)] items-center justify-center md:hidden">
          <Button
            type="edit"
            text="Edit"
            onClick={() => {
              setIsEditOpen((prev) => !prev);
            }}
          />
          <Button type="error" text="Delete" onClick={handleDelete} />
          <Button type="regular" text="Mark as Paid" onClick={handleMarkPaid} />
        </footer>
      </div>

      {isEditOpen && (
        <div>
          <EditInvoice
            setIsEditOpen={setIsEditOpen}
            defaultValues={data}
            setInvoices={setInvoices}
            updateLocal={updateLocal}
          />
        </div>
      )}
    </div>
  );
};

const ItemCardMobile = ({ data }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="bold">{data.name}</p>
        <p className="text-custom-text-tertiary">
          {data.quantity + "x" + " £ " + data.price}
        </p>
      </div>
      <p className="bold">£ {data.price * data.quantity}</p>
    </div>
  );
};
const ItemCard = ({ data }) => {
  return (
    <>
      <p className="bold text-left">{data.name}</p>
      <p className="">{data.quantity}</p>
      <p className="">£{data.price}</p>
      <p className="">£{data.quantity * data.price}</p>
    </>
  );
};

export default InvoiceDetail;
