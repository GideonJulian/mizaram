import React from "react";
import { motion } from "framer-motion";
import BestSellers from "../components/BestSellers";

function Home() {
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
  return (
    <div className="">
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-12">
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
                className="flex max-w-xs mx-auto items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#4a6a50] text-white text-base font-bold"
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
          <p className="text-gray-600  text-base font-normal leading-normal">
            Our commitment to clean beauty means you never have to compromise on
            results or your values.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="mt-8 flex  flex-col md:flex-row items-center gap-6 justify-center -mx-4 pb-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-80 bg-white dark:bg-background-dark/50 border border-[#80ec1333] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Icon */}
              <span className="material-symbols-outlined text-4xl text-[#80ec13] mb-4">
                {item.icon}
              </span>

              {/* Title & Description */}
              <div className="flex flex-col gap-1">
                <h2 className="text-[#141811] dark:text-background-light text-lg font-bold leading-snug">
                  {item.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
