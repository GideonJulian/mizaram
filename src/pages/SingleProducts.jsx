import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../superbase/client";
import Loading from "../components/Loader";
import { motion, AnimatePresence } from "framer-motion";
import YouMayLike from "../components/YouMayLike";

function SingleProducts() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);


  // Fetch a single product
  const fetchProduct = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching product:", error);
      setErrorMsg("Failed to load product");
      setLoading(false);
      return;
    }

    // Set main product
    setProduct(data);


    // Ensure fallback image
    setMainImage(
      data.front_image || "https://placehold.co/600x600?text=No+Image"
    );


 
    setLoading(false);
  };



  useEffect(() => {
    fetchProduct();
    window.scrollTo(0, 0); // Smooth UX when switching products
  }, [id]);

  // Loading state
  if (loading) return <Loading />;

  // Error state
  if (errorMsg) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-red-500 text-xl">
        {errorMsg}
      </div>
    );
  }

  if (!product) return null;

  // Collect non-empty images
  const images = [
    product.front_image,
    product.back_image,
    product.side_image,
  ].filter(Boolean);

  // Quantity Functions
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Price calculations
  const unitPrice = Number(product.price); // ensure numeric
  const totalPrice = (unitPrice * quantity).toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-28">
      <div className="layout-content-container flex flex-col max-w-6xl mx-auto flex-1">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* LEFT — PRODUCT IMAGE */}
          <div className="flex flex-col gap-4">
            <div className="w-full min-h-[400px] bg-white rounded-xl shadow-sm overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mainImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full bg-center bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${mainImage})` }}
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 justify-start">
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setMainImage(img)}
                  className={`w-30 h-30 rounded-lg border-2 cursor-pointer overflow-hidden ${
                    mainImage === img ? "border-[#556b2f]" : "border-gray-300"
                  }`}
                >
                  <div
                    className="w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — PRODUCT DETAILS */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-serif-display font-bold leading-tight">
                {product.name}
              </p>
              <p className="text-text-light/70 dark:text-text-dark/70 text-lg font-normal leading-normal">
                {product.description || "No description provided"}
              </p>
            </div>

            <p className="text-3xl font-semibold text-[#556b2f]">
              {totalPrice}
            </p>

            {/* Extra Info */}
            {/* Extra Info */}
            <div className="flex flex-col gap-4 p-4  dark:border-gray-700">
              {product.category && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Category:
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 font-semibold">
                    {product.category}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  SKU:
                </span>
                <span className="text-gray-800 dark:text-gray-200 font-semibold">
                  {product.id}
                </span>
              </div>

              {product.stock !== undefined && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Availability:
                  </span>
                  <span
                    className={`font-semibold ${
                      product.stock > 0
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              )}

              {product.benefits && (
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    Benefits:
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 mt-1">
                    {product.benefits}
                  </span>
                </div>
              )}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch mt-4">
              <div className="flex items-center justify-between border border-neutral-subtle dark:border-text-light/20 rounded-full p-1">
                <button
                  onClick={decrementQuantity}
                  className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="px-4 text-lg font-medium">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>

              <button className="w-full flex items-center justify-center gap-2 h-14 sm:h-12 px-6 bg-[#556b2f] text-white font-bold rounded-full shadow-md hover:shadow-lg hover:brightness-105 transition-all">
                Add to Cart
                <span className="material-symbols-outlined text-primary text-2xl">
                  add_shopping_cart
                </span>
              </button>
            </div>

            {/* Additional Description / Details */}
            {product.long_description && (
              <div className="mt-6 text-gray-700 dark:text-gray-300">
                <h3 className="font-semibold mb-2">Product Details:</h3>
                <p className="text-sm">{product.long_description}</p>
              </div>
            )}
          </div>
        </section>
        <section>
          <YouMayLike  />
        </section>
      </div>
    </div>
  );
}

export default SingleProducts;
