import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:1500/";
import global_uz from "./translations/uz/grlobal.json";
import global_ru from "./translations/ru/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "ru",
  resources: {
    ru: {
      global: global_ru,
    },
    uz: {
      global: global_uz,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Route>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Route>
);
