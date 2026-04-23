import { Dot } from "lucide-react";
import React from "react";

const StatusCard = ({ status = "paid" }) => {
  if (status == "paid") {
    return <PaidStatus />;
  } else if (status == "pending") {
    return <PendingStatus />;
  } else if (status == "draft") {
    return <DraftStatus />;
  }
};

const DraftStatus = () => {
  return (
    <div
      className={`bg-[#DFE3FA]/6 rounded-md  h-fit flex items-center gap-2 py-3 justify-center w-28`}
    >
      <div className={`w-2 h-2 rounded-full bg-[#DFE3FA] `}></div>
      <p className={`text-[#DFE3FA]`}>Draft</p>
    </div>
  );
};

const PendingStatus = () => {
  return (
    <div
      className={`bg-custom-warning/6 rounded-md  h-fit flex items-center gap-2 py-3 justify-center w-28`}
    >
      <div className={`w-2 h-2 rounded-full bg-custom-warning `}></div>
      <p className={`text-custom-warning`}>Pending</p>
    </div>
  );
};
const PaidStatus = () => {
  return (
    <div
      className={`bg-custom-success/6 rounded-md  h-fit flex items-center gap-2 py-3 justify-center w-28`}
    >
      <div className={`w-2 h-2 rounded-full bg-custom-success `}></div>
      <p className={`text-custom-success`}>Paid</p>
    </div>
  );
};
export default StatusCard;
