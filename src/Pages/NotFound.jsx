import React, { Component } from "react";
import Header from "../Components/header/Header";
import "../Styles/notfound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <h1 className="not-title">Not Found This Page</h1>
          <p className="not-text">
            <span className="d-block mb-3 mt-3 text-title">We are sorry, the page you tried to access was not found.</span>
            You may have used an outdated link or may have typed the address
            (URL) incorrectly. If you don't know where to go from here, feel
            free to use our search engine at the top of this page.
          </p>
        </div>
      </div>
    );
  }
}
