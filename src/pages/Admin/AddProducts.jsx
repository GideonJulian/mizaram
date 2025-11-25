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
            <h1 className="text-[#2d3748] text-lg font-bold leading-tight px-6 pt-5 pb-4 border-b border-[#e2e8f0]">Product Details </h1>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
