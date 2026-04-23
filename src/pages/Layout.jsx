import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import CreateInvoice from "../components/CreateInvoice";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen transition duration-500 bg-custom-bg-white items-center lg:flex-row lg:items-start relative ">
      <NavBar />

      <div className="w-full flex-1 relative flex justify-center overflow-auto">
        {/* {isCreateOpen && (
          <CreateInvoice
            setIsCreateOpen={setIsCreateOpen}
            setInvoices={setInvoices}
          />
        )} */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
