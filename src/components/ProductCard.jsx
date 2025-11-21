import React from "react";
import { motion } from "framer-motion";
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

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: 'spring',
            stiffness:100,
          }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 4px 5px rgba(74,106,80,0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full cursor-pointer items-center justify-center h-9 sm:h-10 rounded-full bg-[#80ec1333] hover:bg-[#80ec134d] text-[#141811] text-sm font-bold transition-colors"
        >
          Add to Cart
        </motion.button>
      </div>
    </div>
  );
}

export default ProductCard;
