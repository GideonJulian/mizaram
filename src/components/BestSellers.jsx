import React from "react";
import ProductCard from "./ProductCard";
import pro1 from "../assets/images/pro1.png";

function BestSellers() {
  const products = [
    { id: 1, name: " Hydrating Serum", image: pro1, price: "$29.99", desc: 'For dewy, plump skin' },
  ];
  return (
    <div className="w-full mx-auto">
      <h2 className="text-[#141811] dark:text-background-light text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-5 text-center">
        Our Best Sellers
      </h2>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="flex items-stretch gap-4 px-4 sm:px-6 lg:px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
