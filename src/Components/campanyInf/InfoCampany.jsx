import React, { Component } from "react";
import hikvision from "../../images/2560px-Hikvision_logo.svg.png";
import dahua from "../../images/download.png";
import "./campany.css";

export default class Campany extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header-1">
            <div class="container">
              <h1 className="text-center title-pr">Technology partners</h1>
              <p className="partner_text">
                ProSecurity Business Assistant. At Your Fingertips.
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
            <p className="pr_bio">HIKVISION</p>
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
          <div className="box-partner">
            <div className="padding-img">
            <img src={dahua} alt="dahua" className="partner-img" />
            </div>
            <p className="pr_bio">Dahua</p>
          </div>
        </div>
      </div>
    );
  }
}
