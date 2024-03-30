import React from "react";
import Header from "../Components/header/Header";
import Body from "../Components/body/Body";
import Banner from "../Components/banner/Banner";
import Product from "../Components/products/Product";
import Blog from "../Components/blogs/Blog";
import Footer from "../Components/footer/footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Body />
      <Banner />
      <Product />
      <Blog />
      <Footer />
    </div>
  );
}
