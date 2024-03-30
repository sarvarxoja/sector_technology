import React, { Component } from "react";
import video from "../../images/production_id_3856665 (1080p).mp4";
import { Link } from "react-router-dom";
import "./campany.css";

export default class AbtCampany extends Component {
  render() {
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
              <h1 className="intro__title">О нашей кампании</h1>
              <p className="intro__text">
                The film takes the viewer to the 70s of the last century. The
                protagonist organizes an expedition to the Skull island, always
                covered in fog, on which King Kong was once caught to find the
                missing brother and some mysterious substance. During...
              </p>
              <div class="intro__box">
                <Link className="sl-23">Watch Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="intro_title rp-23">
            Наш уникальный подход отличает нас
          </h1>
          <div className="ff_flex bottom-44">
            <div className="box-1">
              <i class="fas fa-phone-alt icon-service"></i>
              <span className="tt-1">Постоянное общение</span>
              <p className="service_tx">
                <Link className="sl-23 sl-34 mt-444" to={"/support"}>
                  Watch Now
                </Link>
              </p>
            </div>
            <div className="box-1">
              <i className="far fa-badge-check icon-service"></i>
              <span className="tt-1">Высокое качество</span>
              <p className="service-tx">
                <Link className="sl-23 sl-34 mt-44" to={"/partner/info"}>
                  Watch Now
                </Link>
              </p>
            </div>
            <div className="box-1">
              <i className="fas fa-webcam icon-service"></i>
              <span className="tt-1">Современные технологии</span>
              <p className="service_tx">
                <Link className="sl-23 sl-34 mt-55" to={"/products/ip-camera"}>
                  Watch Now
                </Link>
              </p>
            </div>
            <div className="box-1">
              <i className="fas fa-code icon-service"></i>
              <span className="tt-1">Качественное программное обеспечение</span>
              <p className="service_tx">
                <Link className="sl-23 sl-34 mt-45" to={"/programms"}>
                  Watch Now
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-center mb-5">Наш адрес</h2>
            <div className="ff_flex_23">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.124631500139!2d69.20061133917902!3d41.28245818345256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba8fe15b771%3A0x26de3eab18f004c0!2sSECTOR%20TECHNOLOGY%20LTD!5e1!3m2!1sru!2s!4v1710669991268!5m2!1sru!2s"
                width={600}
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div>
                  <h1 className="total-123 mb-4">Связаться с нами</h1>
                  <div className="flex-000 mb-3">
                    <i class="fas fa-phone-square-alt icon"></i>
                    <div className="size-1">
                      <a href="tel:+99897 666 66 66" className="text-dark link">+99897 666 66 66</a> <br />
                      <a href="tel:+99897 666 66 66" className="text-dark link">+99897 666 66 66</a>
                    </div>
                  </div>
                <div className="mb-3">
                  <div className="flex-000">
                  <i className="fab fa-telegram-plane icon"></i>
                    <div className="size-1">
                      <a href="https://t.me/SECTOR373" className="text-dark link" target="_blank">SECTOR TECHNOLOGY</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex-000">
                    <i className="fas fa-at icon"></i>
                    <div className="size-1">
                      <a href="example@gmail.com" className="text-dark link">example@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex-000">
                    <i className="fab fa-youtube icon"></i>
                    <div className="size-1">
                      <a href="https://www.youtube.com/@SECTORTECHNOLOGY/videos" className="text-dark link" target="_blank">@SECTORTECHNOLOGY</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
