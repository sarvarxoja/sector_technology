import React, { Component, useEffect, useState } from "react";
import Loader from "./Loader";
import Header from "../Components/header/Header";
import Service from "../Components/service/service";
import Footer from "../Components/footer/footer";

const ProductServices = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <Header /> <Service /> <Footer />
        </div>
      )}
    </div>
  );
};

export default ProductServices;
