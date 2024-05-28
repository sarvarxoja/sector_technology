import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "../service/service.css";
import "./all_product.css";

export const ProductsComponent = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState();
  let [url, setUrl] = useState(`/api/product`);

  function handleSubmit(e) {
    e.preventDefault();
    setUrl(`/api/product?name=${name}`);
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {  
      try {
        await axios.get(url).then((e) => {
          setError();
          return setData(e.data?.data.rows);
        });
      } catch (error) {
        if (error?.response?.data.status === 404) {
          setError("Data not found");
        }
      }
    }
    getData();
  }, [url]);


  const [t, i18n] = useTranslation("global");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;  
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage(e) {
    e.preventDefault();

    if (currentPage === 1) {
      return;
    }

    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage(e) {
    e.preventDefault();
    let next_data = numbers.length - 1;

    if (next_data < currentPage) {
      return;
    }

    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  if (error) {
    return (
      <div className="products-repo">
        <form className="container search_form" onSubmit={handleSubmit}>
          <i className="fas fa-search search_icon"></i>
          <input
            type="text"
            placeholder="Поиск продукта"
            className="search_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="search_btn">{t("body.search")}</button>
        </form>
        <div>
          <ul className="product_list_control container">
          <li className="product_list" onClick={(e) => setUrl("api/product?type=lifts")}>{t("type.lifts")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=ip_camera")}>{t("type.ip-camera")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=damaphon")}>{t("type.damaphon")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=turniket")}>{t("type.turniket")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=face_id")}>{t("type.face_id")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=nvr")}>{t("type.nvr")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=servers")}>{t("type.servers")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=switches")}>{t("type.switches")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=camutator")}>{t("type.camutator")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=controllers")}>{t("type.controllers")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=accesuares")}>{t("type.accesuares")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=software_program")}>{t("type.software_program")}</li>
          </ul>
        </div>
        <h1 className="container title_pr1">{error}</h1>
      </div>
    );
  }

  return (
    <div className="products-repo">
      <form className="container search_form" onSubmit={handleSubmit}>
        <i className="fas fa-search search_icon"></i>
        <input
          type="text"
          placeholder="Поиск продукта"
          className="search_input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="search_btn">{t("body.search")}</button>
      </form>
      <div>
        <ul className="product_list_control container">
          <li className="product_list" onClick={(e) => setUrl("api/product?type=lifts")}>{t("type.lifts")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=ip_camera")}>{t("type.ip-camera")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=damaphon")}>{t("type.damaphon")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=turniket")}>{t("type.turniket")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=face_id")}>{t("type.face_id")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=nvr")}>{t("type.nvr")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=servers")}>{t("type.servers")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=switches")}>{t("type.switches")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=camutator")}>{t("type.camutator")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=controllers")}>{t("type.controllers")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=accesuares")}>{t("type.accesuares")}</li>
          <li className="product_list" onClick={(e) => setUrl("api/product?type=software_program")}>{t("type.software_program")}</li>
        </ul>
      </div>
      <div className="container repository_catalog">
        {records.map((e, i) => {
          return (
            <div className="catalog" key={i}>
              <img
                src={`http://localhost:1500/${e.product_img}`}
                alt=""
                className="product_img"
              />
              <div>
                <div className="name_section">
                  <span className="product_name">{e.product_name}</span>
                </div>
                <Link to={`/product/${e.id}`} className="buy_now">
                  {t("body.shop_btn")}
                </Link>
              </div>
            </div>
          );
        })}
        <nav className="pagination_navbar">
          <ul className="pagination">
            <li className="page-item">
              <a href="" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <div className="pagination_section" key={i}>
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                >
                  <button
                    onClick={() => changeCPage(n)}
                    className="pagination_btn"
                  >
                    {n}
                  </button>
                </li>
              </div>
            ))}
            <li className="page-item">
              <a href="" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
