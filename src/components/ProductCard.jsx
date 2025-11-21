import React from "react";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col w-full rounded-xl bg-white shadow-lg overflow-hidden">
      {/* Product Image */}
      <div
        className="w-full aspect-[3/4] bg-cover bg-center transition-transform duration-500 hover:scale-105 rounded-t-xl"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>

      {/* Product Info */}
      <div className="flex flex-col justify-between p-4 gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-[#141811] dark:text-background-light text-sm sm:text-base font-bold">
              {product.name}
            </p>
            <p className="text-[#141811] dark:text-background-light text-sm sm:text-base font-bold">
              {product.price}
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            {product.desc}
          </p>
        </div>

        <button className="flex w-full items-center justify-center h-9 sm:h-10 rounded-full bg-[#80ec1333] hover:bg-[#80ec134d] text-[#141811] text-sm font-bold transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
