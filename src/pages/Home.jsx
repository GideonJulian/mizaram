import React, { useState } from "react";
import { motion } from "framer-motion";
import BestSellers from "../components/BestSellers";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
function Home() {
  const navigate = useNavigate()
    const [productsData, setProductsData] = useState([]);

  const data = [
    {
      icon: "cruelty_free",
      title: "Cruelty-Free",
      desc: "We never test on animals. All of our products are 100% vegan and cruelty-free.",
    },
    {
      icon: "eco",
      title: "Natural Ingredients",
      desc: "Formulated with high-quality, sustainably sourced botanical extracts.",
    },
    {
      icon: "health_and_safety",
      title: "Dermatologist Tested",
      desc: "Safe and effective for all skin types, including the most sensitive.",
    },
  ];
  const concernData = [
    { title: "Hydration", image: pic1 },
    { title: "Anti-Aging", image: pic2 },
    { title: "Brightening", image: pic3 },
  ]
    const fetchProducts = async () => {
    const { data, error } = await supabase  
      .from("products")
      .select("*");
  
    if (error) {
      console.log("Error fetching products:", error);
    } else {
      console.log("Products fetched successfully:", data);
    }
    setProductsData(data || []);
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="">
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="hero flex min-h-[500px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center">
            <div className="flex flex-col gap-4 max-w-2xl">
              {/* Heading with on-load animation */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Mizaram: Radiance, Naturally.
              </motion.h1>

              {/* Paragraph with on-load animation */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-white/90"
              >
                Embrace your natural beauty with our holistic self-care
                products, rooted in nature.
              </motion.p>

              {/* Button with on-load + hover animation */}
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
                onClick={()=> navigate('/shop')}
                className="flex cursor-pointer max-w-xs mx-auto items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#4a6a50] text-white text-base font-bold"
              >
                Shop The Collection
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <BestSellers />
      </div>
    <section className="py-10 px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col gap-4 max-w-2xl mx-auto text-center">
    <h1 className="text-[#141811] dark:text-background-light text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
      Pure, Potent, Proven
    </h1>
    <p className="text-gray-600 text-base font-normal leading-normal">
      Our commitment to clean beauty means you never have to compromise on
      results or your values.
    </p>
  </div>

  {/* Horizontal Scroll on Mobile */}
  <div
    className="
      mt-8 
      flex 
      gap-6 
      overflow-x-auto 
      pb-4 
      px-1
      scrollbar-hide 
      snap-x snap-mandatory 
      
      md:overflow-visible 
      md:justify-center 
      md:flex-wrap
    "
  >
    {productsData.map((item, index) => (
      <div
        key={index}
        className="
          flex-shrink-0 
          w-64 
          md:w-80 
          snap-center
          bg-white 
          dark:bg-background-dark/50 
          border border-[#80ec1333] 
          rounded-2xl 
          p-6 
          shadow-md 
          hover:shadow-xl 
          transition-all duration-300 
          hover:scale-105 
          cursor-pointer
        "
      >
        <span className="material-symbols-outlined text-4xl text-[#80ec13] mb-4">
          {item.icon}
        </span>

        <div className="flex flex-col gap-1">
          <h2 className="text-[#141811] dark:text-background-light text-lg font-bold leading-snug">
            {item.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="py-10 px-4 sm:px-6 lg:px-8">
  <h1 className="text-[#141811] dark:text-background-light text-2xl font-bold leading-tight tracking-tight mb-6 text-center">
    Shop by Concern
  </h1>

  <div className="flex flex-wrap justify-center gap-6">
    {concernData.map((conc, index) => (
      <Link
        key={index}
        className="group relative flex h-60 w-full sm:w-80 lg:w-96 items-end justify-start overflow-hidden rounded-xl p-4 text-white no-underline shadow-lg transition-transform duration-300 hover:scale-105"
      >
        {/* Background Image with Gradient */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url('${conc.image}')`,
          }}
        ></div>

        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold">{conc.title}</h3>
      </Link>
    ))}
  </div>
</section>
 
    </div>
  );
}

export default Home;
// 
// 
// 
// 