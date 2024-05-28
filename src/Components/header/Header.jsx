import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Sector_Logo_FINISH-cdr-removebg-preview.png";
import { useTranslation } from "react-i18next";
import "./header.css";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    console.log("lang");
    i18n.changeLanguage(lang);
  };
  return (
    <div className="header">
      <nav className="header_navbar container">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="" width={140} height={50} />
          </Link>
        </div>
        <ul className="list_control_main">
          <li>
            <Link to={"/products"} className="navbar-link">
              {t("header.products")}
            </Link>
          </li>
          <li>
            <Link to={"/programms"} className="navbar-link">
              {t("header.programms")}
            </Link>
          </li>
          <li>
            <Link to={"/support"} className="navbar-link">
              {t("header.support")}
            </Link>
          </li>
          <li>
            <Link to={"/partner/info"} className="navbar-link">
              {t("header.partner")}
            </Link>
          </li>
          <li>
            <Link to={"/about/campany"} className="navbar-link">
              {t("header.about_company")}
            </Link>
          </li>
        </ul>
        <div className="dropdown show banner_menu">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bars"></i>
          </a>

          <div
            className="dropdown-menu menu_media"
            aria-labelledby="dropdownMenuLink"
          >
            <Link to={"/products"} className="navbar-link dropdown-item">
              {t("header.products")}
            </Link>
            <Link to={"/programms"} className="navbar-link dropdown-item">
              {t("header.programms")}
            </Link>
            <Link to={"/support"} className="navbar-link dropdown-item">
              {t("header.support")}
            </Link>
            <Link to={"/partner/info"} className="navbar-link dropdown-item">
              {t("header.partner")}
            </Link>
            <Link to={"/about/campany"} className="navbar-link dropdown-item">
              {t("header.about_company")}
            </Link>
            <div className="language_btn">
              <button
                className="navbar-link option media_btn"
                onClick={() => handleChangeLanguage("ru")}
              >
                Rus
              </button>
              <button
                className="navbar-link option media_btn"
                onClick={() => handleChangeLanguage("uz")}
              >
                Uzb
              </button>
            </div>
          </div>
        </div>
        <div className="btn-group dropleft language_main_controller">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {t("body.select_language")}
          </button>
          <div className="dropdown-menu">
            <button
              className="navbar-link option dropdown-item"
              onClick={() => handleChangeLanguage("ru")}
            >
              Rus
            </button>
            <button
              className="navbar-link option dropdown-item"
              onClick={() => handleChangeLanguage("uz")}
            >
              Uzb
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
