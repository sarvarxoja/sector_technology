import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./a_product.css";
import NotFound from "../../Pages/NotFound";

export const One_ProductData = () => {
  let { id } = useParams("id");
  let [productData, setProductData] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then((e) => setProductData(e.data.response))
      .catch((e) => console.log(e));
  }, [id]);

  // console.log(productData.product);

  return (
    <div className="container">
      <div className="product_data_repository">
        <img
          src={`http://localhost:1500/${productData.product_img}`}
          alt=""
          className="product_img_a1"
        />
        <div className="info_data_p02">
          <h1>{productData.product_name}</h1>
          <p className="bio_product">{productData.product_bio}</p>
          <a href="" className="buy_product_b1">
            Купить продукт
          </a>
        </div>
      </div>
    </div>
  );
};
