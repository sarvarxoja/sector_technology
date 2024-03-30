import React, { Component } from "react";
import Header from "../Components/header/Header";
import Gates from "../Components/AutomaticGates/AutomaticGates";
import Footer from "../Components/footer/footer";

export default class AutomaticGates extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gates />
        <Footer/>
      </div>
    );
  }
}
