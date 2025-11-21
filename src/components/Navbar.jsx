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
      </div>
    </div>
  );
}

export default Navbar;
