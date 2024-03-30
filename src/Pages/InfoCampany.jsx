import React, { Component } from "react";
import Header from "../Components/header/Header";
import Campany from "../Components/campanyInf/InfoCampany";
import Footer from "../Components/footer/footer";

export default class InfoCampany extends Component {
  render() {
    return (
      <div>
        <Header />
        <Campany />
        <Footer/>
      </div>
    );
  }
}
