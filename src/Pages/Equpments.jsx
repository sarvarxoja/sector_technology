import React, { Component } from "react";
import Header from "../Components/header/Header";
import EqupmentService from "../Components/equpment-service/equpment";
import Footer from "../Components/footer/footer";

export default class EquipmentsService extends Component {
  render() {
    return (
      <div>
        <Header />
        <EqupmentService />
        <Footer/>
      </div>
    );
  }
}
