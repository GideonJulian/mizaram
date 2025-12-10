import React from "react";
import { useCart } from "../context/CartContext";

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
          {/* cart items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 flex flex-col gap-4">
              {cart.map((item) => (
                <div className="flex flex-col sm:flex-row gap-6 bg-[#fff] p-6 rounded-lg shadow-sm border border-[#f2f4f0] justify-between">
                  <div className="flex items-start gap-6">
                    <div
                      className="bg-center bg-no-repeat bg-cover rounded-lg h-24 w-24 flex-shrink-0 "
                   style={{ backgroundImage: `url(${item.front_image})` }}

                    ></div>
                    <div className="flex flex-1 flex-col justify-center gap-1">
                      <p className="text-base font-medium text-[#333]">
                        {item.name}
                      </p>
                      <p className="text-sm font-normal text-[#758961]">
                        N{item.price}
                      </p>{" "}
                      <p className="text-sm font-normal text-[#758961]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between">
                    <div className="flex items-center gap-3 text-[#333]">
                      <button className="text-xl font-medium flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f4f0] cursor-pointer hover:bg-gray-200 transition-colors">
                        -
                      </button>
                      <input
                        type="text"
                        value={"1"}
                        className="text-base font-medium w-6 p-0 text-center bg-transparent focus:outline-none border-none ring-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <button className="text-xl font-medium flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f4f0] cursor-pointer hover:bg-gray-200 transition-colors">
                        +
                      </button>
                    </div>
                    <button className="text-xs font-medium text-[#758961] hover:text-red-500 underline mt-2">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* summary */}
            <div className="lg:col-span-1 mt-10 lg:mt-0">
              <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm border border-[#f2f4f0] sticky top-28">
                <h2 className="text-2xl font-bold tracking-tight pb-4 border-b border-[#f2f4f0]">
                  Order Summar
                </h2>
                <div>
                  <button className="flex w-full mt-8 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-[#4b6f44] text-white text-base font-bold tracking-wide hover:bg-[#4b6f44e6] transition-colors shadow-sm">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
