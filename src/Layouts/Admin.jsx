import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/Admin/SideBar";

function Admin() {
  return (
    <div className="bg-[#f9f9f9]  font-display text-[#2d3748] dark:text-text-dark">
      <div className="flex h-screen">
        {" "}
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
