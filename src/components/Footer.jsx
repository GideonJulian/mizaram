import React from "react";
import { Link, Links } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white  border-t border-[#e0e0e0 ] mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#4a6b53] text-3xl">
                spa
              </span>
              <h2 className="text-[#333]  text-xl font-bold tracking-tight">
                MIZARAM
              </h2>
            </Link>
            <p className="text-[#757575] text-sm">
              Natural skincare for a radiant you. Crafted with care and the
              finest ingredients.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-[#323232]">Shop</h3>
            <Links className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              All Products
            </Links>
            <Links className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Body Care
            </Links>
            <Links className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Face care
            </Links>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-[#323232]">Support</h3>
            <Links className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Contact Us
            </Links>
            <Links className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              FAQ
            </Links>
            <Links className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Shipping & Returns
            </Links>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
