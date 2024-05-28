import React, { useEffect, useState } from "react";
import Data from "./programms";
import "./programms.css";

export default function PrComponent() {
  const [dataValue, setDataValue] = useState("lkds");
  const [programmsData, serProgrammsData] = useState([]);

  useEffect(
    (e) => {
      const programmsData = Data.filter((e) => e.type == dataValue);
      serProgrammsData(programmsData);
    },
    [dataValue]
  );

  return (
    <div className="container">
      <div>
        <ul className="programms_type">
          <button
            className="type_company"
            onClick={(e) => setDataValue("dahua")}
          >
            Dahua
          </button>
          <button
            className="type_company"
            onClick={(e) => setDataValue("hikvision")}
          >
            Hikvision
          </button>
          <button
            className="type_company"
            onClick={(e) => setDataValue("roger")}
          >
            Roger
          </button>
          <button
            className="type_company"
            onClick={(e) => setDataValue("lkds")}
          >
            Lkds
          </button>
        </ul>
      </div>
      <div className="d-flex all_programms">
        {programmsData.map((e) => {
          return (
            <div className="box_programm">
              <div>
                <img
                  src={e.image}
                  alt=""
                  width={250}
                  className="programm_img"
                />
                <h2 className="programm_name">{e.name}</h2>
              </div>
              <p className="programm_bio">{e.about_programm}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
