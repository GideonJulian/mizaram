import React, { useEffect, useState } from "react";
import { supabase } from "../../superbase/client";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const YouMayLike = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(8);

    if (error) {
      console.log("Error fetching products:", error);
    } else {
      setProduct(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="pt-24">
      <h3 className="text-3xl font-serif-display font-bold text-center mb-8">
        You Might Also Like
      </h3>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Swiper
      
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={false}
          
          className="pb-10"
        >
          {product.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-3 group">
                <div className="relative overflow-hidden rounded-xl cursor-pointer bg-white dark:bg-text-light/10 shadow-md">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/3] bg-cover"
                    style={{ backgroundImage: `url(${item.front_image})` }}
                  ></div>

                  <button className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <span className="material-symbols-outlined text-primary">
                      add_shopping_cart
                    </span>
                  </button>
                </div>

                <div className="flex flex-col items-center text-center">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-[#333333b3] dark:text-text-dark/70">
                    ₦{item.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {product.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 group">
            <div className="relative overflow-hidden rounded-xl cursor-pointer bg-white dark:bg-text-light/10 shadow-md">
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/3] bg-cover"
                style={{ backgroundImage: `url(${item.front_image})` }}
              ></div>

              <button className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="material-symbols-outlined text-primary">
                  add_shopping_cart
                </span>
              </button>
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-[#333333b3] dark:text-text-dark/70">
                ₦{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLike;
