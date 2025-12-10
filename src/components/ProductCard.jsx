import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart(product);

    // Trigger success UI
    setShowSuccess(true);

    // Auto hide after 1.8s
    setTimeout(() => {
      setShowSuccess(false);
    }, 1800);
  };

  return (
    <div
      className="relative flex flex-col w-full rounded-xl bg-white shadow-lg overflow-hidden cursor-pointer"
      onClick={handleNavigate}
    >
      {/* Product Image */}
      <div
        className="w-full md:aspect-3/3 aspect-3/4 bg-cover bg-center transition-transform duration-500 hover:scale-105 rounded-t-xl"
        style={{ backgroundImage: `url(${product.front_image})` }}
      ></div>

      {/* Product Info */}
      <div className="flex flex-col justify-between p-4 gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-[#141811] text-sm sm:text-base font-bold">
              {product.name}
            </p>
            <p className="text-[#141811] text-sm sm:text-base font-bold">
              ₦{product.price}
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
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

      {/* ✅ Success Toast UI */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-[#4b6f44] text-white rounded-full shadow-lg"
          >
            <span className="material-symbols-outlined text-lg">check_circle</span>
            <p className="text-sm font-medium">Added to cart</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductCard;
