import React from "react";
import Product from "./Product";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
const Mangalsutra = () => {
  return (
    <>
      <Navbar />
      <img src="https://banner.caratlane.com/live-images/5ea26211115f47aba7ad690828cbaf37.webp" />
      <Product endpoint="mangalsutra" />
      <Footer />
    </>
  );
};

export default Mangalsutra;
