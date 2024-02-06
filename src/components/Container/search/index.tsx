import React, { useEffect, useState } from "react";
import "./search.scss";
import axios from "axios";
import { useErrorHandler } from "react-error-boundary";
const localData = require("./localData.json");
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export default function Search() {
  const [counter, setCounter] = useState(1);
  const [select, setSelect] = useState("false");
  const [changeLocal, setChangeLocal] = useState("");
  const [cityName, setCityName] = useState([]);

  const handleError = useErrorHandler();
  const handleChange = async (e: any) => {
    e.preventDefault();
    setSelect("get");
    setChangeLocal(e.target.value);

    axios
      .get(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${e.target.value}`, GEO_API_OPTIONS)
      .then((res: any) => {
        if (res.data && res.data.data) {
          setCityName(res.data.data);
        }
      })
      .catch((error) => {
        handleError(error);
      });
  };

  function slideUp() {
    if (counter === 1) {
      setSelect("init");
      setCounter(2);
    }
    if (counter === 2) {
      setSelect("false");
      setCounter(1);
    }
  }

  return (
    <div className="search">
      <input
        className="comboGroup"
        type="text"
        id="carBrand"
        placeholder="City Name"
        onClick={slideUp}
        value={changeLocal}
        onChange={handleChange}
      />

      {select === "init" && (
        <div className="shadow">
          {localData.map((item: any, index: any) => (
            <div
              key={index}
              className="position"
              onClick={() => {
                setChangeLocal(item.name);
                setSelect("false");
              }}
            >
              {" "}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {select === "get" && (
        <div className="shadow">
          {cityName.map((item: any, index: any) => (
            <div
              key={index}
              className="position"
              onClick={() => {
                setChangeLocal(item.city);
                setSelect("false");
              }}
            >
              {" "}
              {item.city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
