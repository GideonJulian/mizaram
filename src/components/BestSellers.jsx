import React from "react";
import ProductCard from "./ProductCard";
import pro1 from "../assets/images/pro1.png";
import pro2 from "../assets/images/pro2.png";
import pro3 from "../assets/images/pro3.png";
import pro4 from "../assets/images/pro4.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Hydrating Serum",
      image: pro1,
      price: "$29.99",
      desc: "For dewy, plump skin",
    },
    {
      id: 2,
      name: "Gentle Cleanser",
      image: pro2,
      price: "$29.99",
      desc: "Purifies without stripping",
    },
    {
      id: 3,
      name: "Vitamin C Eye Cream",
      image: pro3,
      price: "$29.99",
      desc: "Reduces puffiness and dark circles",
    },
    {
      id: 4,
      name: "Nourishing Oil",
      image: pro4,
      price: "$29.99",
      desc: "For soft & smooth skin",
    },
  ];

  return (
    <section className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#141811] dark:text-background-light text-3xl font-bold text-center mb-8">
        Our Best Sellers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="w-full max-w-[320px]" // Ensure card doesn’t overflow
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 120,
        }}
        whileHover={{
          scale: 1.07,
          boxShadow: "0px 8px 20px rgba(74,106,80,0.4)",
        }}
        whileTap={{ scale: 0.98 }}
        className="flex max-w-xs mx-auto mt-20 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#4a6a50] text-white text-base font-bold"
      >
      <Link to={'/shop'} className="w-full h-full flex items-center justify-center">
          Shop The Collection
      </Link>
      </motion.button>
    </section>
  );
}

export default BestSellers;
