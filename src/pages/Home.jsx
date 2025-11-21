import React from "react";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="">
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="hero flex min-h-[500px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Mizaram: Radiance, Naturally.
              </h1>
              <p className="text-lg text-white/90">
                Embrace your natural beauty with our holistic self-care
                products, rooted in nature.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 8px 20px rgba(74,106,80,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex max-w-xs mx-auto items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#4a6a50] text-white text-base font-bold"
              >
                Shop The Collection
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
