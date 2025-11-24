import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/Admin/SideBar";

function Admin() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-[#f9f9f9]  font-display text-[#2d3748] dark:text-text-dark">
      <div className="flex items-center p-4  lg:hidden absolute z-0">
        <button onClick={() => setOpenSidebar(true)}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
      <div className="flex h-screen">
        <div className=""></div>

        <SideBar
          isOpen={openSidebar}
          closeSidebar={() => setOpenSidebar(false)}
        />

        <div className="flex-1 overflow-y-auto p-5 mt-10">
          <div className="max-w-4xl mx-auto">
            {" "}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
