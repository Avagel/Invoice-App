import React from "react";
import StatusCard from "./StatusCard";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InvoiceCard = ({ data }) => {
  const { id, date, receiver, status, items } = data;
  let total = 0;
  items.forEach((element) => {
    total = total + element.price * element.quantity;
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail/" + id, { state: data });
  };
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      className="cursor-pointer hover:border hover:border-custom-accent shrink-0 w-full min-h-0 grid grid-cols-2 justify-between rounded-lg card gap-6 md:gap-0 md:flex md:items-center md:justify-between bg-custom-bg-card"
    >
      <p className="bold md:mr-7">
        <span className="text-custom-text-tertiary"># </span>
        {id}
      </p>
      <p className="little text-custom-text-primary row-start-2 col-start-1 md:mr-12.75 ">
        Due {formatDate(date)}
      </p>
      <p className="little line-clamp-1 text-custom-text-secondary ml-auto md:ml-0 md:mr-20.5 ellipsis ">
        {receiver.name}
      </p>

      <p className="bold row-start-2 col-start-1 place-self-end mr-auto md:mr-10 md:place-self-auto">
        £ {total}
      </p>
      <div className="ml-auto row-start-2 col-start-2 md:ml-0 md:mr-5">
        <StatusCard status={status} />
      </div>

      <button className="md:col-start-6 text-custom-accent hidden md:block">
        <ChevronRight size={15} />
      </button>
    </div>
  );
};
// <div className="w-full  flex flex-col  rounded-lg gap-6 card md:flex-row">
//   <header className="flex items-center justify-between">
//     <p className="bold">
//       <span className="text-custom-text-tertiary">#</span>12345
//     </p>
//     <p className="little text-custom-text-secondary">Akanume Iruoghene</p>
//   </header>

//   <section className="flex justify-between">
//     <div className="flex flex-col justify-between md:flex-row">
//       <p className="little text-custom-text-primary">Due 30 Oct 3030</p>
//       <p className="bold">$ 4,066.33</p>
//     </div>
//     <StatusCard status={1} />
//   </section>
// </div>

export default InvoiceCard;
