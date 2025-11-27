import React from "react";
import { Link } from "react-router-dom";

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
            <Link className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              All Products
            </Link>
            <Link className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Body Care
            </Link>
            <Link className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Face care
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-[#323232]">Support</h3>
            <Link className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Contact Us
            </Link>
            <Link className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              FAQ
            </Link>
            <Link className="text-[#757575] text-sm hover:text-[#4a6b53] transition-colors">
              Shipping & Returns
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[#323232]">Join our newsletter</h3>
            <p className="text-[#757575]  text-sm">
              Get 10% off your first order.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="form-input w-full rounded-l-lg border border-[#e0e0e0] bg-[#f9f9f7] focus:ring-[#4a6b53] focus:border-[#4a6b53] text-sm h-10"
              />
              <button className="bg-[#4a6b53] text-white px-4 rounded-r-lg font-bold text-sm h-10">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#e0e0e0] flex justify-between items-center text-sm text-[#757575]">
          <p>© 2024 AURA Skincare. All rights reserved.</p>
          <div className="flex gap-4">
            <Link>
              {/* <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path>
              </svg> */}
            </Link>
            <Link></Link>
            <Link></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
