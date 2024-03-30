import React, { Component, useEffect, useState } from "react";
import Header from "../Components/header/Header";
import TerminalService from "../Components/terminals/terminal";
import Footer from "../Components/footer/footer";
import Loader from "./Loader";

const Terminals = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ma'lumotlarni yuklash tugaganda loader ni yopish
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
          <Header /> <TerminalService /> <Footer />
        </div>
      )}
    </div>
  );
};

export default Terminals;
