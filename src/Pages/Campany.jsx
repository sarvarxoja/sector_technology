import React, { Component } from "react";
import Header from "../Components/header/Header";
import AbtCampany from "../Components/campany/campany";
import Footer from "../Components/footer/footer";

export default class AboutCampany extends Component {
  render() {
    return (
      <div>
        <Header />
        <AbtCampany />
        <Footer />
      </div>
    );
  }
}
