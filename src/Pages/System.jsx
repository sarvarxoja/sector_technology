import React, { Component } from "react";
import Header from "../Components/header/Header";
import SystermSt from "../Components/system/system.service"


export default class System extends Component {
  render() {
    return (
      <div>
        <Header />
        <SystermSt/>
      </div>
    );
  }
}
