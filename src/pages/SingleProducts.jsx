import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../superbase/client";
import Loading from "../components/Loader";

function SingleProducts() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch a single product
  const fetchProduct = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log("Error fetching product:", error);
      setErrorMsg("Failed to load product");
    } else {
      setProduct(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;

  if (errorMsg) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-red-500 text-xl">
        {errorMsg}
      </div>
    );
  }

  if (!product) return null;

  // If you saved images in storage, construct their URL here:
  const productImage = product.front_image
    ? product.front_image
    : "https://placehold.co/600x600?text=No+Image";

  return (
    <div className="container mx-auto px-4 py-8 md:py-28">
      <div className="layout-content-container flex flex-col max-w-6xl mx-auto flex-1">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* LEFT — PRODUCT IMAGE */}
          <div className="flex flex-col gap-4">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-96 shadow-sm"
              style={{ backgroundImage: `url(${productImage})` }}
            ></div>
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
              ₦{product.price}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <div className="flex items-center justify-between border border-neutral-subtle dark:border-text-light/20 rounded-full p-1">
                <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="px-4 text-lg font-medium">1</span>
                <button className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>

              <button className="flex-1 flex items-center justify-center gap-2 h-12 px-6 bg-[#556b2f] text-white font-bold rounded-full shadow-md hover:shadow-lg hover:brightness-105 transition-all">
                Add to Cart
                <span className="material-symbols-outlined text-primary text-2xl">
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default SingleProducts;
