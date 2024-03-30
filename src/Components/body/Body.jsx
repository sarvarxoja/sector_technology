import React, { Component } from "react";
import Banner from "../../images/camera.jpg";
import Banner2 from "../../images/1920.jpg";
import Banner3 from "../../images/banner1.jpg";
import Banner4 from "../../images/banner5.jpg";
import Banner5 from "../../images/hikvision banner.jpg"

export default class Body extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleRide"
          className="carousel slide mb-5"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={Banner} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Banner2} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item active">
              <img src={Banner4} className="d-block w-100" alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
