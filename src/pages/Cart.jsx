import React from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 py-10 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                My Bag
              </h1>
              <p className="text-base font-normal text-[#758961]">
                You have {cart.length} items in your bag
              </p>
            </div>
          </div>

          {/* ✨ EMPTY CART UI */}
          {cart.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center text-center py-32"
            >
              <motion.span
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                className="material-symbols-outlined text-[80px] text-[#4b6f44]/40"
              >
                shopping_bag
              </motion.span>

              <h2 className="text-2xl font-semibold mt-4">Your cart is empty</h2>
              <p className="text-[#758961] mt-2 max-w-md">
                Looks like you haven’t added any items yet.  
                Start exploring our collection and add items to your bag.
              </p>

              <Link
                to="/"
                className="mt-6 px-6 py-3 bg-[#4b6f44] text-white rounded-full hover:bg-[#3f5c39] transition-all shadow-md"
              >
                Continue Shopping
              </Link>
            </motion.div>
          )}

          {/* 📦 CART ITEMS */}
          {cart.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 flex flex-col gap-4">
                {cart.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm border border-[#f2f4f0] justify-between"
                  >
                    <div className="flex items-start gap-6">
                      {/* Product Image */}
                      <div
                        className="bg-center bg-no-repeat bg-cover rounded-lg h-24 w-24 flex-shrink-0"
                        style={{ backgroundImage: `url(${item.front_image})` }}
                      ></div>

                      {/* Product Info */}
                      <div className="flex flex-1 flex-col justify-center gap-2">
                        <p className="text-base font-medium text-[#333]">
                          {item.name}
                        </p>
                        <p className="text-sm font-normal text-[#758961]">
                          ₦{item.price}
                        </p>
                        <p className="text-sm font-normal text-[#758961]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between">
                      <div className="flex items-center gap-3 text-[#333]">
                        <button className="text-xl font-medium flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f4f0] hover:bg-gray-200 transition-colors">
                          -
                        </button>

                        <input
                          type="text"
                          value={item.qty || 1}
                          readOnly
                          className="text-base font-medium w-6 p-0 text-center bg-transparent border-none"
                        />

                        <button className="text-xl font-medium flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f4f0] hover:bg-gray-200 transition-colors">
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-medium text-[#758961] hover:text-red-500 underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 🧾 SUMMARY */}
              <div className="lg:col-span-1 mt-10 lg:mt-0">
                <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm border border-[#f2f4f0] sticky top-28">
                  <h2 className="text-2xl font-bold tracking-tight pb-4 border-b border-[#f2f4f0]">
                    Order Summary
                  </h2>

                  <button className="flex w-full mt-8 cursor-pointer items-center justify-center rounded-lg h-12 bg-[#4b6f44] text-white text-base font-bold tracking-wide hover:bg-[#3f5c39] transition-colors shadow-sm">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
