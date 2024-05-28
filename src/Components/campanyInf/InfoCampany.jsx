import React, { Component } from "react";
import hikvision from "../../images/2560px-Hikvision_logo.svg.png";
import dahua from "../../images/download.png";
import roger from "../../images/img_6122022143156.png";
import "./campany.css";
import { useTranslation } from "react-i18next";

const Campany = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div>
        <div className="header-1">
          <div class="container">
            <h1 className="text-center title-pr">{t("partners.title")}</h1>
            <p className="partner_text">
            {t("partners.about")}
            </p>
          </div>
        </div>
      </div>
      <div className="container repo-of-pr">
        <div className="box-partner">
          <div className="padding-img">
            <img src={dahua} alt="dahua" className="partner-img" />
          </div>
          <p className="pr_bio">Dahua</p>
        </div>
        <div className="box-partner">
          <div className="padding-img">
            <img src={hikvision} alt="dahua" className="partner-img2" />
          </div>
          <p className="pr_bio">Hikvision</p>
        </div>
        <div className="box-partner">
          <div className="padding-img">
            <img src={roger} alt="dahua" className="partner-img" />
          </div>
          <p className="pr_bio">Roger</p>
        </div>
        <div className="box-partner">
          <div className="padding-img">
            <img src={dahua} alt="dahua" className="partner-img" />
          </div>
          <p className="pr_bio">Dahua</p>
        </div>
        <div className="box-partner">
          <div className="padding-img">
            <img src={dahua} alt="dahua" className="partner-img" />
          </div>
          <p className="pr_bio">Dahua</p>
        </div>
        <div className="box-partner">
          <div className="padding-img">
            <img src={dahua} alt="dahua" className="partner-img" />
          </div>
          <p className="pr_bio">Dahua</p>
        </div>
      </div>
    </div>
  );
};

export default Campany;
