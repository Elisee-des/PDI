import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import NavigationFront from "./navigation";

const Fontend = ({ children }) => {
  return (
    <div className="main">
      {/* <Navbar /> */}
      <NavigationFront />

      {children}
      <Footer />
    </div>
  );
};

export default Fontend;
