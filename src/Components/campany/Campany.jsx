import React, { Component } from "react";
import video from "../../images/production_id_3856665 (1080p).mp4";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./campany.css";

const AbtCampany = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="mb-4" id="start">
      <div>
        <div className="intro">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="header_video intro_bg"
          ></video>
          <div class="container intro__content">
            <h1 className="intro__title">{t("campany.campany_title")}</h1>
            <p className="intro__text">{t("campany.campany_bio")}</p>
            <div class="intro__box">
              <Link className="sl-23">{t("campany.watch")}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="intro_title rp-23">{t("campany.service_title")}</h1>
        <div className="ff_flex bottom-44">
          <div className="box-1">
            <i class="fas fa-phone-alt icon-service"></i>
            <span className="tt-1">{t("campany.communication")}</span>
            <p className="service_tx">
              <Link className="sl-23 sl-34 mt-444" to={"/support"}>
              {t("campany.watch")}
              </Link>
            </p>
          </div>
          <div className="box-1">
            <i className="far fa-badge-check icon-service"></i>
            <span className="tt-1">{t("campany.quality")}</span>
            <p className="service-tx">
              <Link className="sl-23 sl-34 mt-44" to={"/partner/info"}>
              {t("campany.watch")}
              </Link>
            </p>
          </div>
          <div className="box-1">
            <i className="fas fa-webcam icon-service"></i>
            <span className="tt-1">{t("campany.technology")}</span>
            <p className="service_tx">
              <Link className="sl-23 sl-34 mt-55" to={"/products/ip-camera"}>
              {t("campany.watch")}
              </Link>
            </p>
          </div>
          <div className="box-1">
            <i className="fas fa-code icon-service"></i>
            <span className="tt-1">{t("campany.software")}</span>
            <p className="service_tx">
              <Link className="sl-23 sl-34 mt-45" to={"/programms"}>
              {t("campany.watch")}
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center mb-5">{t("footer.address")}</h2>
          <div className="ff_flex_23">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.124631500139!2d69.20061133917902!3d41.28245818345256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba8fe15b771%3A0x26de3eab18f004c0!2sSECTOR%20TECHNOLOGY%20LTD!5e1!3m2!1sru!2s!4v1710669991268!5m2!1sru!2s"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtCampany;
