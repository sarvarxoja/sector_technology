import React, { Component } from "react";
import camera from "../../images/1_0_01_04_40696_313736725_crop_thumb.png";
import s1 from "../../images/s1.webp";
import s2 from "../../images/s2.webp";
import s3 from "../../images/3.webp";
import s4 from "../../images/s23.webp";
import s5 from "../../images/s55.webp";
import s6 from "../../images/s44.webp";

export default class Service extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-5 text-center">
          Сетевой Оборудование И Серверный Оборудование
        </h1>
        <div className="box-flex container">
          <div className="block">
            <img src={s1} alt="" className="img-service" />
            <h1 className="service-title">Сервер HP ProLiant DL380 G6</h1>
            <p className="bio-service">
              ПроцессорСPU 2x Процессор Intel® Xeon® E5520 2.26GHz Memory - 8GB
              DDR 3 Hard Drive - 8x 146 GB Optical Drive - DVD RAID - P400 Smart
              Array RAID Card PSU 2x 400 w
            </p>
            <a
              href="https://t.me/techjobs_vakansiya"
              className="buy_now"
              target="_blank"
            >
              Купить сейчас
            </a>
          </div>
          <div className="block">
            <img src={s2} alt="" className="img-service" />
            <h1 className="service-title">Сервер HP ProLiant DL380 G5</h1>
            <p className="bio-service">
              ПроцессорСPU 1x Xeon X5450 Quad Core 3.00GHz Memory - 4GB DDR 2
              Hard Drive - 2x 146GB 10K Optical Drive - DVD RAID - P400 Smart
              Array RAID Card PSU 2x 400 w
            </p>
            <a
              href="https://t.me/techjobs_vakansiya"
              className="buy_now"
              target="_blank"
            >
              Купить сейчас
            </a>
          </div>
          <div className="block">
            <img src={s3} alt="" className="img-service" />
            <h1 className="service-title">
            HPE ProLiant DL380 Gen10
            </h1>
            <p className="bio-service">
            HPE ProLiant DL380 Gen10- Center facing HPE ProLiant DL380 Gen10 Server - Hardware Tour 1:13HPE ProLiant DL380 Gen10 server HPE ProLiant DL380 Gen10- Left facing HPE ProLiant DL380 Gen10- Rear facing HPE ProLiant DL380 Gen10 - Top Down Interior (SFF) HPE
            </p>
            <a
              href="https://t.me/techjobs_vakansiya"
              className="buy_now"
              target="_blank"
            >
              Купить сейчас
            </a>
          </div>
          <div className="block">
            <img src={s4} alt="" className="img-service" />
            <h1 className="service-title">
            Сервер HP Proliant DL360 Gen9, 2 процессора Intel Xeon 12C E5-2678v3, 64GB DRAM, 4LFF, P440ar/2GB FBWC
            </h1>
            <p className="bio-service">
            Сервер HP Proliant DL360 Gen9, 2 процессора Intel Xeon 12C E5-2678v3 2.50GHz/30MB, память 64GB DRAM, 4 отсека под диски SATA/SAS 3.5", контроллер P440ar/2GB FBWC
            </p>
            <a
              href="https://t.me/techjobs_vakansiya"
              className="buy_now"
              target="_blank"
            >
              Купить сейчас
            </a>
          </div>
          <div className="block">
            <img src={s5} alt="" className="img-service" />
            <h1 className="service-title">
            Сервер HP Proliant DL380 Gen9, 2 процессора Intel Xeon 12C E5-2678v3, 64GB DRAM, 8SFF, P440ar/2GB FBWC
            </h1>
            <p className="bio-service">
            Сервер HP Proliant DL380 Gen9, 2 процессора Intel Xeon 12C E5-2678v3 2.50GHz/30MB, память 64GB DRAM, 8 отсеков под диски SATA/SAS 2.5", контроллер P440ar/2GB FBWC
            </p>
            <a
              href="https://t.me/techjobs_vakansiya"
              className="buy_now"
              target="_blank"
            >
              Купить сейчас
            </a>
          </div>
          <div className="block">
            <img src={s6} alt="" className="img-service" />
            <h1 className="service-title">
            Сервер HP Proliant DL380 Gen9, 2 процессора Intel Xeon 12C E5-2678v3, 64GB DRAM, 12LFF, P440ar/2GB FBWC
            </h1>
            <p className="bio-service">
            Сервер HP Proliant DL380 Gen9, 2 процессора Intel Xeon 12C E5-2678v3 2.50GHz/30MB, память 64GB DRAM, 12 отсеков под диски SATA/SAS 3.5", контроллер P440ar/2GB FBWC
            </p>
            <a
              href="https://t.me/techjobs_vakansiya"
              className="buy_now"
              target="_blank"
            >
              Купить сейчас
            </a>
          </div>
        </div>
      </div>
    );
  }
}
