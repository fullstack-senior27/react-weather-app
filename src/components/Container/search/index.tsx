import React, { useEffect, useState } from "react";
import "./search.scss";
import axios from "axios";
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

  useEffect(()=> {
    (async () => {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${changeLocal}`,
      GEO_API_OPTIONS);
      // Check status codes and whatnot here and handle accordingly
      const data = await response.json();
      console.log("data:",data);
      setCityName(data.data);
      // return data;
    })();
  },[])

  // useEffect(() => {
  //   setTimeout(async () => {
  //       const response = await fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${changeLocal}`,
  //            GEO_API_OPTIONS);
  //       const data = await response.json();
  //       console.log("data:",data);
  //       setCityName(data.data);
  //   }, 3000);
  // }, [changeLocal]);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     let response = await axios.get(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${changeLocal}`,
  //     GEO_API_OPTIONS)
  //     console.log("data:",response);
  //     setCityName(response.data.data);
  //   }, 1000);
  // }, []);

  const handleChange = async (e: any) => {
    e.preventDefault();
    setSelect("get");
    setChangeLocal(e.target.value);
    // try {
    //   const response = await fetch(
    //     `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${e.target.value}`,
    //     GEO_API_OPTIONS
    //   );

    //   const data = await response.json();
    //   console.log("data", data);
    //   setCityName(data.data);
    //   return data;
    // } catch (error) {
    //   console.log(error);
    //   return;
    // }
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
        placeholder="Select or type a new option..."
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
