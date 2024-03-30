import React from "react";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/footer";
import "../Styles/input.style.css";

export default function Support() {
  return (
    <div>
      <Header />
      <div className="container mt-5 mb-5">
        <h1 className="text-center">Дайте нам знать</h1>
        <form action="">
          <input
            type="text"
            className="input-sm"
            placeholder="Напишите свой номер телефона и имя"
          />
          <textarea
            type="text"
            className="input-sm input-text"
            placeholder="Что вы хотите нам сказать?"
          />
          <button className="service-btn sl-23 sl-34 border-0">
            Отправлять
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
