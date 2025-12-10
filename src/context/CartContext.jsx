import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };
};

const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};

const updateQty = (id, qty) => {
  setCart((prev) =>
    prev.map((item) => (item.id === id ? { ...item, qty: qty } : item))
  );
};

return (
  <CartContext.Provider value={{ cart, updateQty, removeFromCart, addToCart }}>
    {children}
  </CartContext.Provider>
);
