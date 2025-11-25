import React, { useState } from "react";

const AddProducts = () => {
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-[#2d3748]  text-3xl font-bold leading-tight tracking-tight">
          Add New Product
        </h1>
        <p className="text-[#718096]  text-base font-normal leading-normal mt-1">
          Fill in the details below to add a new product to the catalog.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="bg-white rounded-xl shadow-soft border border-[#e2e8f0]">
          <h1 className="text-[#2d3748] text-lg font-bold leading-tight px-6 pt-5 pb-4 border-b border-[#e2e8f0]">
            Product Details{" "}
          </h1>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="" className="flex flex-col">
                <p className="text-sm font-medium leading-normal pb-2 text-[#2d3748] dark:text-text-dark">
                  Product Name
                </p>
              </label>
              <input
                type="text"
                placeholder="e.g. Natural Glow Face Serum"
                className="form-input w-full rounded-lg text-[#2d3748] bg-[#f9f9f9]  border-[#e2e8f0]  focus:ring-2 focus:ring-[#38664180] focus:border-[#386641] h-12 placeholder:text-subtext-light px-4 text-base font-normal"
              />
            </div>
            <div className="">
              <div className="flex flex-col">
                <label htmlFor="" className="">
                  <p className="text-sm font-medium leading-normal pb-2 text-[#2d3748] dark:text-text-dark">
                    price
                  </p>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#718096]">
                    $
                  </span>
                  <input
                    placeholder="29.99"
                    className="form-input w-full rounded-lg text-[#2d3748] bg-[#f9f9f9] border-[#e2e8f0] focus:ring-2 focus:ring-[#38664180] focus:border-[#386641] h-12 placeholder:text-subtext-light[#333] pl-8 pr-4 text-base font-normal"
                    type=""
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="">
                <p className="text-sm font-medium leading-normal pb-2 text-[#2d3748] dark:text-text-dark">
                  Description
                </p>
                <textarea
                  name=""
                  id=""
                  className="form-textarea w-full rounded-lg text-[#2d3748] bg-[#f9f9f9] border-[#e2e8f0] focus:ring-2 focus:ring-[#38664180] focus:border-[#386641] placeholder:text-[#333]  p-4 text-base font-normal"
                  placeholder="Describe the product..."
                ></textarea>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
