import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./products.css";

const ProductsMain = () => {
  const [data, setData] = useState([]);
  const [t, i18n] = useTranslation("global");
  let url = `/api/product`;

  useEffect(() => {
    async function getData() {
      try {
        await axios.get(url).then((e) => {
          setData(e.data?.data.rows.slice(0, 8));
        });
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [url]);

  return (
    <div className="container top_m5 mx-width-medi">
      <h1 className="title_main">{t('body.title_product')}</h1>
      <div className="product_rp_a1">
        {data.map((e, i) => {
          return (
            <div className="main_pg_background" key={i}>
              <img
                src={`http://localhost:1500/${e.product_img}`}
                alt=""
                className="product_main_img"
              />
              <span className="product_title tl-1">{e.product_name}</span>
              <Link to={`/product/${e.id}`} className="buy_now btn_lnk_1">
              {t('body.shop_btn')}
              </Link>
            </div>
          );
        })}
      </div>
      <Link className="buy_now btn_lnk_1 hv-32" to={"/products"}>
        {t('body.more')}
      </Link>
    </div>
  );
};

export default ProductsMain;
