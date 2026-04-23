import React, { useState } from "react";
import AddButton from "../components/AddButton";
import { ChevronDown } from "lucide-react";
import InvoiceCard from "../components/InvoiceCard";
import noInvoice from "../assets/noInvoice.svg";
import CreateInvoice from "../components/CreateInvoice";
import Button from "../components/Button";
const Home = ({ invoices, setInvoices, updateLocal }) => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="  w-full p-6 lg:max-h-screen flex flex-col  ">
      <div className="flex-1 min-h-0  overflow-auto   w-full overflow-y-auto  items-center flex flex-col">
        <header className="flex items-center gap-4 h-11 mt-7 mb-13.75 lg:mt-19.25 w-full md:max-w-200">
          <section className="h-full mr-auto  ">
            <h2 className="leading-none  text-2xl md:text-4xl font-bold">
              Invoices
            </h2>
            <p className="little text-custom-text-primary mt-1.5">
              {invoices.length && invoices.length > 0
                ? invoices.length + " invoices"
                : "No invoices"}
            </p>
          </section>

          <button>
            <p className="bold">
              Filter
              <ChevronDown
                size={13}
                className="inline ml-3 text-custom-accent"
              />
            </p>
          </button>

          <Button
            onClick={() => {
              setIsCreateOpen((prev) => !prev);
            }}
            type="add"
            text="New"
          />
        </header>

        {invoices && invoices.length ? (
          <div className=" flex flex-col gap-4 w-full lg:max-w-200">
            {invoices.map((invoice) => {
              return <InvoiceCard key={invoice.id} data={invoice} />;
            })}
          </div>
        ) : (
          <section className="text-center flex flex-col items-center justify-center mt-25.5">
            <figure>
              <img src={noInvoice} alt="" />
            </figure>
            <h2 className="mt-10.5 mb-5.75 font-bold">There is nothing here</h2>
            <p className="little leading-3.75">
              Create an invoice by clicking the <br /> New button and get
              started
            </p>
          </section>
        )}
      </div>

      {isCreateOpen && (
        <div>
          <CreateInvoice
            setIsCreateOpen={setIsCreateOpen}
            setInvoices={setInvoices}
            updateLocal={updateLocal}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
