import React from "react";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";
import Product from "./Product";

const Rings = () => {
  return (
    <>
      <Navbar />
      <img src="https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg" />
      <Product endpoint="ring" />
      <Footer />
    </>
  );
};

export default Rings;
