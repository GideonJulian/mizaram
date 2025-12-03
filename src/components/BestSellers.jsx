import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "../../superbase/client";
import Loading from "./Loader";

function BestSellers() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(4); // Optional: fetch only 4 best sellers

    if (error) {
      console.log("Error fetching products:", error);
    } else {
      console.log("Products fetched successfully:", data);
      setProductsData(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[#141811] dark:text-background-light text-3xl font-bold text-center mb-8">
        Our Best Sellers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        {productsData.map((product, index) => (
          <motion.div
            key={product.id}
            className="w-full max-w-[320px]"
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
        <Link
          to={"/shop"}
          className="w-full h-full flex items-center justify-center"
        >
          Shop The Collection
        </Link>
      </motion.button>
    </section>
  );
}

export default BestSellers;
