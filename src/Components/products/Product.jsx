import React, { Component } from "react";
import { Link } from "react-router-dom";
import camera from "../../images/1_0_01_04_40696_313736725_crop_thumb.png";
import server from "../../images/setevoe-oborydovanie.webp"
import vr1 from "../../images/1.webp"
import vr2 from "../../images/1.jpg"
import vr3 from "../../images/photogenica-phx190064184.jpg"
import vr4 from "../../images/a.png"
import vr5 from "../../images/images.jpg"
import "./products.css";

export default class Product extends Component {
  render() {
    return (
      <div className="container repository_product">
        <h1 className="product_title text-center mb-5">Новая продукция</h1>
        <div>
          <div className="products">
            <div className="catalog">
              <img src={camera} alt="" className="product_img" width={350} height={300}/>
              <h3 className="product_name">IP Камеры И Домафония</h3>
              <Link
                className="buy_now products-link"
                to={"/products/ip-camera"}
              >
                Встречайтесь Сейчас
              </Link>
            </div>
            <div className="catalog">
              <img src={server} alt="" className="product_img" width={350} height={300}/>
              <h3 className="product_name">
                Сетевой Оборудование И Серверный Оборудование
              </h3>
              <Link
                className="buy_now products-link"
                to={"/products/equipment"}
              >
                Встречайтесь Сейчас
              </Link>
            </div>
            <div className="catalog">
              <img src={vr1} alt="" className="product_img" width={350} height={300}/>
              <h3 className="product_name">Автоматы Ворота И Двери</h3>
              <Link
                className="buy_now products-link"
                to={"/products/AutomaticGates"}
              >
                Встречайтесь Сейчас
              </Link>
            </div>
            <div className="catalog">
              <img src={vr2} alt="" className="product_img" width={350} height={300}/>
              <h3 className="product_name">
                Терминалы Контрол Доступа И Турникеты
              </h3>
              <Link className="buy_now products-link" to={"/products/terminal"}>
                Встречайтесь Сейчас
              </Link>
            </div>
            <div className="catalog">
              <img src={vr3} alt="" className="product_img" width={350} height={300}/>
              <h3 className="product_name">Програмные Обеспеченные</h3>
              <Link className="buy_now products-link" to={'/products/software'}>Встречайтесь Сейчас</Link>
            </div>
            <div className="catalog">
              <img src={vr4} alt="" className="product_img" width={350} height={300}/>
              <h3 className="product_name">
                Сервис центр Проектные Оборудование
              </h3>
              <Link className="buy_now products-link" to={"/products/project"}>Встречайтесь Сейчас</Link>
            </div>
            <div className="catalog">
              <img src={vr5} alt="" className="product_img" width={350} height={300}/>
              <h3 className="product_name">Системные Архитектура Проектов</h3>
              <Link className="buy_now products-link" to={"/products/system"}>Встречайтесь Сейчас</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
