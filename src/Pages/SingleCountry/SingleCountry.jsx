import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeRequest } from "../../axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./SingleCountry.scss";
function SingleCountry() {
  const countryName = useLocation().pathname.split("/")[2];
  const [currentCountry, setCurrentCountry] = useState({});

  const getCurrentCountry = () => {
    makeRequest
      .get("/name/" + countryName)
      .then((res) => setCurrentCountry(res.data));
  };
  useEffect(() => {
    getCurrentCountry();
  }, []);

  return (
    <div>
      {currentCountry.length > 0 ? (
        currentCountry.map((c, index) => (
          <div key={index} className="SingleCountry">
            <div className="button-container">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="button-back"
              >
                <span>
                  <ArrowBackIcon />
                  Back
                </span>
              </Link>
            </div>
            <div className="country-container">
              <div className="country-img">
                <img src={c.flags.svg} alt="country" />
              </div>
              <div className="country-info">
                <h1>{c.name.common}</h1>
                <span>Native name:{c.nativeName}</span>
                <span>Population: {c.population}</span>
                <span>Region: {c.region}</span>
                <span>Subregion:</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No data</h1>
      )}
    </div>
  );
}

export default SingleCountry;
