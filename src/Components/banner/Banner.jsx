import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import rasm2 from "../../images/photo_2_2024-02-11_10-51-24.jpg";
import rasm3 from "../../images/photo_2024-05-03_14-52-45.jpg";
import rasm5 from "../../images/a_photo_1.jpg";
import rasm6 from "../../images/b_photo_2.jpg";
import "./banner.css";

export default function Banner() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="container">
      <h1 className="banner-title mb-5">{t("body.banner")}</h1>
      <div className="grid-photos">
        <div className="photo3">
          <Link to={""}>
            <img
              src={rasm3}
              alt=""
              height={300}
              className="photo-banner container img_1_1"
            />
          </Link>
        </div>
        <div className="d-flex main-flex container">
          <div>
            <div className="photo6">
              <Link to={""}>
                <img src={rasm6} alt="" className="photo-banner super_img image_1"/>
              </Link>
            </div>
            <div className="photo5">
              <Link to={""}>
                <img
                  src={rasm5}
                  alt=""
                  className="photo-banner super_img i-2"
                />
              </Link>{" "}
            </div>
          </div>

          <div className="photo2">
            <Link to={""}>
              <img src={rasm2} alt="" className="photo-banner a-img" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
