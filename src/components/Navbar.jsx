import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-[#4a6a5033] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-[#4a6a50]">
            <span className="material-symbols-outlined text-3xl">spa</span>
            <h2 className="text-2xl font-bold tracking-tighter">Mizaram</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary">
              Our Story
            </Link>
            <Link className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#888">
            Search
          </span>
          <input
          placeholder='Search'
            type="text"
            className="form-input h-10 w-40 rounded-full border-0 bg-[#0000000d] pl-10 pr-4 text-sm placeholder:text[#888]  focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
