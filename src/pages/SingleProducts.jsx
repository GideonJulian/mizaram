import React from "react";
import { useParams } from "react-router-dom";
import pro1 from "../assets/images/pro1.png";

function SingleProducts() {
  const { id } = useParams();
  const item = [
    {
      id: 1,
      name: "Hydrating Serum",
      image: pro1,
      price: "$29.99",
      desc: "For dewy, plump skin",
      type: "serum",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
      SingleProducts {id}
      <div className="layout-content-container flex flex-col max-w-6xl mx-auto flex-1">
        <div className="flex flex-wrap gap-2 pb-8"></div>{" "}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-96 shadow-sm"
              style={{ backgroundImage: `url(${pro1})` }}
            ></div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-serif-display font-bold leading-tight">
                Radiant Glow Serum
              </p>
              <p className="text-text-light/70 dark:text-text-dark/70 text-lg font-normal leading-normal">
                Your daily dose of hydration and brightness
              </p>
            </div>
            <p className="text-3xl font-semibold text-[#556b2f]">$42.00</p>
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
                Add to Cart{" "}
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
