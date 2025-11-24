import React, { useState } from "react";
import pro1 from "../assets/images/pro1.png";
import pro2 from "../assets/images/pro2.png";
import pro3 from "../assets/images/pro3.png";
import pro4 from "../assets/images/pro4.png";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

function Shop() {
  const [selectedType, setSelectedType] = useState("all");
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const [DropsearchTerm, setDropSearchTerm] = useState("");
  const [searchBarTerm, setSearchBarTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Hydrating Serum",
      image: pro1,
      price: "$29.99",
      desc: "For dewy, plump skin",
      type: "serum",
    },
    {
      id: 2,
      name: "Gentle Cleanser",
      image: pro2,
      price: "$29.99",
      desc: "Purifies without stripping",
      type: "face wash",
    },
    {
      id: 3,
      name: "Vitamin C Eye Cream",
      image: pro3,
      price: "$29.99",
      desc: "Reduces puffiness",
      type: "moisturizer",
    },
    {
      id: 4,
      name: "Nourishing Oil",
      image: pro4,
      price: "$29.99",
      desc: "For soft & smooth skin",
      type: "oil",
    },
  ];

  const productTypes = [
    "all",
    "lotion",
    "body wash",
    "face wash",
    "body spray",
    "serum",
    "moisturizer",
    "sunscreen",
    "oil",
  ];

  // Dropdown filtering
  const filteredTypes = productTypes.filter((type) =>
    type.toLowerCase().includes(DropsearchTerm.toLowerCase())
  );

  // Main filtering
  const filteredProducts = products.filter((p) => {
    const matchType = selectedType === "all" || p.type === selectedType;
    const matchSearch = p.name
      .toLowerCase()
      .includes(searchBarTerm.toLowerCase());
    return matchType && matchSearch;
  });

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Change page with animation reset
  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col gap-8">
      {/* Header + Search Bar */}
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-text-light-primary dark:text-text-dark-primary text-4xl font-bold tracking-tighter">
            Explore Our Collection
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-base">
            Discover natural skincare crafted with the finest ingredients.
          </p>
        </div>

        {/* Search Bar — moved to the END */}
        <div className="relative w-full max-w-xs">
          <div className="flex items-center h-10 w-full rounded-full border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-4 shadow-sm focus-within:ring-2 focus-within:ring-primary/40 transition-all">
            <span className="material-symbols-outlined text-text-light-secondary dark:text-text-dark-secondary text-[20px] mr-2">
              search
            </span>

            <input
              value={searchBarTerm}
              onChange={(e) => setSearchBarTerm(e.target.value)}
              type="text"
              placeholder="Search Product..."
              className="w-full bg-transparent text-sm text-[#000]  placeholder:text-[#333] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 py-2 border-y border-border-light dark:border-border-dark relative">
        {/* Product Type Filter */}
        <button
          onClick={() => setShowTypeMenu(!showTypeMenu)}
          className="flex h-10 items-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border px-4 hover:border-[#4a6b53]"
        >
          <p className="text-sm font-medium capitalize">
            {selectedType === "all" ? "Product Type" : selectedType}
          </p>
          <span className="material-symbols-outlined text-xl">expand_more</span>
        </button>

        {/* Dropdown */}
        {showTypeMenu && (
          <div className="absolute left-0 mt-12 w-56 bg-white dark:bg-surface-dark rounded-lg shadow-md border p-2 z-20">
            {/* Search inside dropdown */}
            <input
              value={DropsearchTerm}
              onChange={(e) => setDropSearchTerm(e.target.value)}
              type="text"
              placeholder="Search type..."
              className="w-full mb-2 px-3 py-2 rounded-md border text-sm bg-white dark:bg-surface-dark"
            />

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
                    className="w-full text-left px-4 py-2 text-sm hover:bg-[#80ec1333] capitalize rounded-md"
                  >
                    {type}
                  </button>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center px-3 py-4 text-center"
                >
                  <span className="material-symbols-outlined text-gray-400 text-4xl mb-1">
                    search_off
                  </span>

                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    No matches found
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Try a different keyword
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {/* Sort placeholder */}
        <div className="flex-grow"></div>

        <button className="flex h-10 items-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border px-4">
          <p className="text-sm font-medium">Sort By: Best Selling</p>
          <span className="material-symbols-outlined text-xl">expand_more</span>
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <motion.div
        key={currentPage} // triggers animation on page change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="w-full max-w-[320px]" // Ensure card doesn’t overflow
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <div className="">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col  items-center justify-center px-3 py-4 text-center"
            >
              <span className="material-symbols-outlined  text-gray-400 text-8xl mb-1">
                search_off
              </span>

              <p className="text-md text-gray-500 dark:text-gray-400 font-medium">
                No matches found
              </p>
              <p className="text-sm text-gray-400 mt-0.5">
                Try a different keyword
              </p>
            </motion.div>
          </div>
        )}
      </motion.div>
      <div className="flex items-center justify-center p-4">
        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {/* Prev */}
            <button
              onClick={() => changePage(currentPage - 1)}
              className="size-10 flex items-center justify-center text-gray-500 hover:text-black disabled:opacity-30"
              disabled={currentPage === 1}
            >
              <span className="material-symbols-outlined text-3xl">
                chevron_left
              </span>
            </button>

            {/* Page numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              const active = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`size-10 flex items-center justify-center rounded-full text-sm font-bold transition-all
            ${
              active
                ? "bg-[#4a6b53] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() => changePage(currentPage + 1)}
              className="size-10 flex items-center justify-center text-gray-500 hover:text-black disabled:opacity-30"
              disabled={currentPage === totalPages}
            >
              <span className="material-symbols-outlined text-3xl">
                chevron_right
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
