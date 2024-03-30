import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Sector_Logo_FINISH-cdr-removebg-preview.png";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="header_navbar container">
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="" width={140} height={50} />
            </Link>
          </div>
          <ul>
            <li>
              <div className="dropdown">
                <button className="dropbtn navbar-link">Продукция</button>
                <div className="dropdown-content">
                  <Link to={"/products/ip-camera"} className="text-un">
                    IP Камеры И Домафония
                  </Link>
                  <Link to={"/products/equipment"} className="text-un">
                    Сетевой Оборудование И Серверный Оборудование
                  </Link>
                  <Link to={"/products/automatic/gates"} className="text-un">
                    Автоматы Ворота И Двери
                  </Link>
                  <Link to={"/products/terminal"} className="text-un">
                    Терминалы Контрол Доступа И Турникеты
                  </Link>
                  <Link to={"/products/software"} className="text-un">
                    Програмные Обеспеченные
                  </Link>
                  <Link to={"/products/project"} className="text-un">
                    Проектные Оборудование
                  </Link>
                  <Link to={"/products/system"} className="text-un">
                    Системные Архитектура Проектов
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link to={"/programms"} className="navbar-link">
              Программы
              </Link>
            </li>
            <li>
              <Link to={"/support"} className="navbar-link">
                Поддержка
              </Link>
            </li>
            <li>
              <Link to={"/partner/info"} className="navbar-link">
                Партнеры
              </Link>
            </li>
            <li>
              <Link to={"/about/campany"} className="navbar-link">
                О компании
              </Link>
            </li>
          </ul>
          <div>
            <select name="" id="" className="language">
              <option value="rus" className="navbar-link option">
                Rus
              </option>
              <option value="uzb" className="navbar-link option">
                Uzb
              </option>
            </select>
          </div>
        </nav>
      </div>
    );
  }
}
