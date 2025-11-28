import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ isOpen, closeSidebar }) => {
  const menuItems = [
    { icon: "dashboard", label: "Dashboard", path: "/admin" },
    { icon: "add_circle", label: "Add Product", path: "/admin/add-product" },
    { icon: "inventory_2", label: "All Products", path: "/admin/products" },
    // { icon: "category", label: "Categories", path: "/admin/categories" },
  ];

  return (
    <>
      {/* BACKDROP FOR MOBILE */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/40 lg:hidden z-20"
        ></div>
      )}

      <div
        className={`
          fixed lg:static z-30 h-full w-64 bg-white border-r border-gray-200
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full p-4">
          {/* HEADER */}
          <div className="flex items-center gap-3 p-3 mb-6">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[#eee] text-center flex items-center justify-center font-bold">
              M
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#2d3748] text-base font-bold">Mizaram</h1>
              <p className="text-[#718096] text-sm">Admin Panel</p>
            </div>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-[#386641] text-white"
                      : "text-[#2d3748] hover:bg-[#3866411a]"
                  }`
                }
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* BOTTOM NAV */}
          <div className="mt-auto flex flex-col gap-2">
            <NavLink
              to="/admin/settings"
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-[#386641] text-white"
                    : "text-[#2d3748] hover:bg-[#3866411a]"
                }`
              }
            >
              <span className="material-symbols-outlined">settings</span>
              Settings
            </NavLink>

            <button className="cursor-pointerc flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#2d3748] hover:bg-[#3866411a]">
              <span className="material-symbols-outlined">logout</span>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
