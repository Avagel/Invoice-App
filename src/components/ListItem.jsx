import React from "react";
import Input from "./Input";
import { Trash } from "lucide-react";

const ListItem = ({ setItems, defaultValue = {} }) => {
  const { id, name, quantity, price } = defaultValue;

  const handleDelete = () => {
    setItems((prev) => {
      console.log(prev, id);
      return prev.filter((itm) => itm.id !== id);
    });
  };
  return (
    <div className="listItem">
      <Input
        label={"Item Name"}
        name={"itmName"}
        placeholder={"Banner Design"}
        defaultValue={name}
      />
      <div className="flex gap-4 justify-center items-end mt-6">
        <Input
          type="number"
          name={"itmQuantity"}
          label={"Qty"}
          defaultValue={quantity}
        />
        <Input label={"Price"} name={"itmPrice"} defaultValue={price} />
        <div>
          <label htmlFor="itmTotal">
            <p className="text-custom-text-tertiary little">Total</p>
          </label>
          <p className="font-bold text-[15px] py-4 w-full rounded-sm mt-2 text-custom-text-tertiary">
            {quantity && price ? quantity * price : "0.00"}
          </p>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          className="text-custom-text-tertiary h-fit px-5 py-4 "
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
