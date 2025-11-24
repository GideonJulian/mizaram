import React, { useState } from "react";
import pro1 from "../assets/images/pro1.png";
import pro2 from "../assets/images/pro2.png";
import pro3 from "../assets/images/pro3.png";
import pro4 from "../assets/images/pro4.png";
import ProductCard from "../components/ProductCard";
function Shop() {
  const [selectedType, setSelectedType] = useState("all");
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const [DropsearchTerm, setDropSearchTerm] = useState("");
  const [searchBarTerm, setSearchBarTerm] = useState("");
  // Dummy Products (DO NOT MAP YET)
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

  const productTypes = [
    "all",
    "lotion",
    "body wash",
    "face wash",
    "body spray",
    "Serum",
    "Moisturizer",
    "Sunscreen",
  ];
  const filteredTypes = productTypes.filter((type) =>
    type.toLowerCase().includes(
      DropsearchTerm.toLowerCase())
  );
  const filterProductsBySearch = products.filter((product) => 
    product.name.toLowerCase().includes(
      searchBarTerm.toLowerCase()
    )
)

  return (
    <div className="container mx-auto px-6 py-20 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-text-light-primary dark:text-text-dark-primary text-4xl font-bold tracking-tighter">
            Explore Our Collection
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal">
            Discover our nature-inspired skincare products, crafted with the
            finest ingredients.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 py-2 border-y border-border-light dark:border-border-dark relative">
        {/* Product Type Filter */}
        <button
          onClick={() => setShowTypeMenu(!showTypeMenu)}
          className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 hover:border-[#4a6b53] transition-colors"
        >
          <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium capitalize">
            {selectedType === "all" ? "Product Type" : selectedType}
          </p>
          <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary !text-xl">
            expand_more
          </span>
        </button>

        {/* Dropdown */}
        {showTypeMenu && (
          <div className="absolute left-0 mt-12 w-56 bg-white dark:bg-surface-dark rounded-lg shadow-md border border-border-light dark:border-border-dark z-20 p-2">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search type..."
              className="w-full mb-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark text-sm focus:outline-none"
              value={DropsearchTerm}
              onChange={(e) => setDropSearchTerm(e.target.value)}
            />

            {/* Scrollable List */}
            <div className="max-h-48 overflow-y-auto">
              {filteredTypes.length > 0 ? (
                filteredTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setShowTypeMenu(false);
                      setDropSearchTerm("");
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#80ec1333] capitalize rounded-md cursor-pointer"
                  >
                    {type}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 px-3 py-2">
                  No match found
                </p>
              )}
            </div>
          </div>
        )}

        {/* Skin Concern Button (placeholder) */}
        <button className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 hover:border-[#4a6b53] transition-colors">
          <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">
            Skin Concern
          </p>
          <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary !text-xl">
            expand_more
          </span>
        </button>

        <div className="flex-grow"></div>

        {/* Sort Button */}
        <button className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark px-4 hover:border-[#4a6b53] transition-colors">
          <p className="text-text-light-primary dark:text-text-dark-primary text-sm font-medium">
            Sort By: Best Selling
          </p>
          <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary !text-xl">
            expand_more
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
     {
        filterProductsBySearch.map((product)=> {
          filterProductsBySearch.length > 0 ? (
            <ProductCard key={product.id} product={product} />
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 px-3 py-2">
              No products found
            </p>
          )
        })
     }
      </div>
    </div>
  );
}

export default Shop;
