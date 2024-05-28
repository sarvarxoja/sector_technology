import React from "react";
import Header from "../Components/header/Header";
import { ProductsComponent } from "../Components/all_products/ProductsComponent";
import Footer from "../Components/footer/footer";
import "../Styles/products.media.css";

export default function Products() {
  return (
    <div>
      <Header />
      <ProductsComponent />
      <Footer />
    </div>
  );
}
