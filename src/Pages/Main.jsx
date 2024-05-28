import React from "react";
import Header from "../Components/header/Header";
import Body from "../Components/body/Body";
import Banner from "../Components/banner/Banner";
import ProductsMain from "../Components/products/Product";
import Blog from "../Components/blogs/Blog";
import Footer from "../Components/footer/footer";
import "../Styles/media.css";

export default function Main() {
  return (
    <div>
      <Header />
      <Body />
      <Banner />
      <ProductsMain />
      <Blog />
      <Footer />
    </div>
  );
}
