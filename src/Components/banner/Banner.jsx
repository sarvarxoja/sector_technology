import React from "react";
import { Link } from "react-router-dom";
import rasm1 from "../../images/photo_1_2024-02-11_10-51-24.jpg";
import rasm2 from "../../images/photo_2_2024-02-11_10-51-24.jpg";
import rasm3 from "../../images/photo_3_2024-02-11_10-51-24.jpg";
import rasm4 from "../../images/photo_4_2024-02-11_10-51-24.jpg";
import rasm5 from "../../images/photo_5_2024-02-11_10-51-24.jpg";
import rasm6 from "../../images/bank.png"
import "./banner.css";

export default function Banner() {
  return (
    <div className="container">
      <h1 className="banner-title mb-5">Решение</h1>
      <div className="grid-photos">
        <div className="photo1">
          <Link to={""}>
            <img src={rasm1} alt="" width={350} height={150} className="photo-banner"/>
          </Link>
        </div>
        <div className="photo3">
          <Link to={""}>
            <img src={rasm3} alt="" width={800} height={300} className="photo-banner"/>
          </Link>
        </div>
        <div className="photo4">
          <Link to={""}>
            <img src={rasm4} alt="" width={350} height={360} className="photo-banner"/>
          </Link>
        </div>
        <div className="photo2">
          <Link to={""}>
            <img src={rasm2} alt="" width={350} height={840} className="photo-banner"/>
          </Link>
        </div>
        <div className="photo6">
          <Link to={""}>
            <img src={rasm6} alt="" width={440}  className="photo-banner"/>
          </Link>
        </div>
        <div className="photo5">
          <Link to={""}>
            <img src={rasm5} alt="" width={440} height={346} className="photo-banner"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
