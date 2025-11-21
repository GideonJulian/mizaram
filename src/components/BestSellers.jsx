import React from "react";
import ProductCard from "./ProductCard";
import pro1 from "../assets/images/pro1.png";
import pro2 from "../assets/images/pro2.png";
import pro3 from "../assets/images/pro3.png";
import pro4 from "../assets/images/pro4.png";
// import pro1 from "../assets/images/pro1.png";

function BestSellers() {
  const products = [
    { id: 1, name: " Hydrating Serum", image: pro1, price: "$29.99", desc: 'For dewy, plump skin' },
    { id: 1, name: "Gentle Cleanser", image: pro2, price: "$29.99", desc: 'Purifies without stripping' },
    { id: 1, name: "Vitamin C Eye Cream", image: pro3, price: "$29.99", desc: 'For dewy, plump skin' },
    { id: 1, name: " Hydrating Serum", image: pro4, price: "$29.99", desc: 'For dewy, plump skin' },
  ];
  return (
    <div className="w-full mx-auto">
      <h2 className="text-[#141811] dark:text-background-light text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-5 text-center">
        Our Best Sellers
      </h2>
      <div className="flex justify-center py-4 -mx-4 sm:-mx-6 lg:-mx-8">
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
