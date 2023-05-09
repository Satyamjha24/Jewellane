import React from "react";
import Product from "./Product";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
const Bracelet = () => {
  return (
    <>
      <Navbar />
      <img src="https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp" />
      <Product endpoint="bracelet" />
      <Footer />
    </>
  );
};

export default Bracelet;
