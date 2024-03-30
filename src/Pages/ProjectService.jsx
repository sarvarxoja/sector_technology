import React, { Component } from "react";
import ProjectEquipment from "../Components/Project Equipment/ProjectEquipment";
import Header from "../Components/header/Header";

export default class ProjectService extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProjectEquipment />
      </div>
    );
  }
}
