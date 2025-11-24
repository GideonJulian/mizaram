import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-64 flex-shrink-0 bg-white border-r border-[#e2e8f0]  flex flex-col">
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center gap-3 p-3 mb-6">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[#eee] text-center">
            M
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#2d3748] text-base font-bold leading-normal">
              Mizaram
            </h1>
            <p className="text-[#718096]  text-sm font-normal leading-normal">
              Admin Panel
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#2d3748] hover:bg-[#3866411a] transition-colors">
            <span className="material-symbols-outlined text-[#718096] dark:text-subtext-dark">
              dashboard
            </span>{" "}
            <p className="text-sm font-medium leading-normal">Dashboard</p>
          </Link>
        </nav>
        <div className="mt-auto">
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#2d3748]hover:bg-[#3866411a] transition-colors">
            <span className="material-symbols-outlined text-[#718096] dark:text-subtext-dark">
              settings
            </span>{" "}
            <p className="text-sm font-medium leading-normal">Settings</p>
          </Link>{" "}
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#2d3748]hover:bg-[#3866411a] transition-colors">
            <span className="material-symbols-outlined text-[#718096] dark:text-subtext-dark">
              logout
            </span>{" "}
            <p className="text-sm font-medium leading-normal">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
