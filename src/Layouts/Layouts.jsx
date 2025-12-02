import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
function Layouts({ children }) {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div>
      {/* <Loader /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layouts;
