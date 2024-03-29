import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./SingleCountry.scss";
import useCountries from "../../hooks/useCountries";
function SingleCountry() {
  const countryName = useLocation().pathname.split("/")[2];
  const [currentCountry, setCurrentCountry] = useState({});
  const { countries } = useCountries();

  const getCurrentCountry = () => {
    console.log(countryName)
    setCurrentCountry(countries.filter((c) => c.name == countryName));
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
                <div className="top-info">
                  <div>
                    <h1>{c.name}</h1>
                    <p>
                      <span>Native name: </span>
                      {c.nativeName}
                    </p>
                    <p>
                      <span>Population:</span> {c.population}
                    </p>
                    <p>
                      <span>Region: </span>
                      {c.region}
                    </p>
                    <p>
                      <span>Subregion:</span> {c.subregion}
                    </p>
                    <p>
                      <span>Capital:</span> {c.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>Top level Domain: </span> {c.topLevelDomain}
                    </p>
                    <p>
                      <span>Languages: </span> {c.languages[0].name}
                    </p>
                    <p>
                      <span>Currencies: </span> {c.currencies[0].name}
                    </p>
                  </div>
                </div>
                <div className="border-countries">
                  <span>Border Countries: </span>
                  {c.borders
                    ? c.borders.map((item, index) => (
                        <span key={index} className="border-country">
                          {item}
                        </span>
                      ))
                    : " No borders"}
                </div>
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
