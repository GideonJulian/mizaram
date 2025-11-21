import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden relative">
      {/* Navbar */}
      <div className="fixed top-0 z-50 w-full border-b border-[#4a6a5033] backdrop-blur-sm bg-white/70">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[#4a6a50]">
              <span className="material-symbols-outlined text-3xl">spa</span>
              <h2 className="text-2xl font-bold tracking-tighter">Mizaram</h2>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium hover:text-primary">Shop</Link>
              <Link className="text-sm font-medium hover:text-primary">Our Story</Link>
              <Link className="text-sm font-medium hover:text-primary">Contact</Link>
            </nav>
          </div>

          {/* Right Icons */}
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#0000000d]">
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setOpen(true)}
              className="sm:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#0000000d]"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-xl p-6 sm:hidden"
            >
              <div className="flex flex-col gap-6 text-center">
                <Link onClick={() => setOpen(false)} className="text-lg font-semibold text-gray-900 tracking-wide">
                  Shop
                </Link>
                <Link onClick={() => setOpen(false)} className="text-lg font-semibold text-gray-900 tracking-wide">
                  Our Story
                </Link>
                <Link onClick={() => setOpen(false)} className="text-lg font-semibold text-gray-900 tracking-wide">
                  Contact
                </Link>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-6 w-full py-3 rounded-xl bg-[#4a6a50] text-white font-semibold"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
