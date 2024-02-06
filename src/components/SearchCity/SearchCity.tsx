import React, { useCallback, useEffect, useState } from "react";
import "./SearchCity.scss";
import axios from "axios";
import { useErrorHandler } from "react-error-boundary";
import { debounce } from "lodash";
import { LocationModel } from "../../models";

const GEO_API_URL = process.env.REACT_APP_WEATHER_LOCATION_API_BASEURL;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

type SearchCityProps = {
  changeLocation: (loc: LocationModel) => void;
};

const SearchCity = ({ changeLocation }: SearchCityProps) => {
  const [counter, setCounter] = useState(1);
  const [select, setSelect] = useState("false");
  const [changeLocal, setChangeLocal] = useState("");
  const [cityName, setCityName] = useState([]);

  const handleError = useErrorHandler();
  const delayedQuery = useCallback(debounce(e => {
    axios
    .get(`${GEO_API_URL}?key=${API_KEY}&q=${e.target.value}`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((res: any) => {
      if (res.data) {
        setCityName(res.data);
      }
    })
    .catch((error) => {
      handleError(error);
    });
  }, 500), []);

  const handleChange = async (e: any) => {
    e.preventDefault();
    setSelect("get");
    setChangeLocal(e.target.value);

    delayedQuery(e);
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
    <div className="searchCity">
      <input
        className="comboGroup"
        type="text"
        id="carBrand"
        placeholder="City Name"
        onClick={slideUp}
        value={changeLocal}
        onChange={handleChange}
      />

      {select === "get" && (
        <div className="shadow">
          {cityName.map((item: any, index: any) => (
            <div
              key={index}
              className="position"
              onClick={() => {
                setChangeLocal(item.name);
                setSelect("false");
                changeLocation({
                  city: item.name, 
                  position: {
                    latitude: item.lat,
                    longitude: item.lon,
                  }
                })
              }}
            >
              {item.name + ", " + item.region + ", " + item.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchCity;