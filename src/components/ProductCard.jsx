import React from "react";

function ProductCard({ product }) {
  return (
    <div className="flex h-full min-w-64 flex-1 flex-col gap-4 rounded-xl bg-white dark:bg-background-dark dark:border dark:border-primary/20 shadow-lg shadow-[#80ec131a]">
      <div className=""></div>
      {/* Background image using prop */}
      <div
        className="w-full rounded-t-xl bg-cover bg-center aspect-[3/4]"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>

      <div className="flex flex-1 flex-col justify-between p-4 pt-0 gap-4">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[#141811] dark:text-background-light text-base font-bold leading-normal">
              {product.name}
            </p>
            <p className="text-[#141811] dark:text-background-light text-base font-bold leading-normal">
              {product.price}
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
            {product.desc}
          </p>
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#80ec1333] hover:bg-[#80ec134d] text-[#141811] text-sm font-bold leading-normal">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
