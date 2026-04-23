import React, { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import { ChevronDown } from "lucide-react";
import InvoiceCard from "../components/InvoiceCard";
import noInvoice from "../assets/noInvoice.svg";
import CreateInvoice from "../components/CreateInvoice";
import Button from "../components/Button";
const Home = ({ invoices, setInvoices, updateLocal }) => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filter, setFilter] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  const handleFilter = (item = "") => {
    item = item.toLocaleLowerCase();

    setFilter((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };
  invoices = invoices.filter((invoice) => {
    // If all filters are off, show everything
    if (Object.values(filter).every((value) => value === false)) return true;

    // Otherwise only show invoices whose status is checked
    return filter[invoice.status] === true;
  });

  return (
    <div className="  w-full p-6 lg:max-h-screen flex flex-col  ">
      <div className="flex-1 min-h-0  overflow-auto   w-full overflow-y-auto  items-center flex flex-col">
        <header className=" relative   flex items-center gap-4 h-11 mt-7 mb-13.75 lg:mt-19.25 w-full md:max-w-200">
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

          <div className=" relative  ">
            <button
              className="hover:text-custom-accent"
              onClick={() => {
                setFilterOpen((prev) => !prev);
              }}
            >
              <p className="bold ">
                Filter
                <ChevronDown
                  size={13}
                  className="inline ml-3 text-custom-accent"
                />
              </p>
            </button>
            {filterOpen && (
              <div className="card rounded-lg absolute  flex flex-col gap-3 -left-[50%] mt-2">
                {["Draft", "Pending", "Paid"].map((item, index) => {
                  return (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={index}
                        onChange={() => {
                          handleFilter(item);
                        }}
                        checked={filter[item.toLocaleLowerCase()]}
                        className="appearance-none w-4 h-4 rounded-sm cursor-pointer border-2 border-transparent bg-custom-bg-white checked:bg-custom-accent checked:border-custom-accent relative"
                      />
                      <span className="text-custom-text-dark font-semibold text-sm">
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

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
