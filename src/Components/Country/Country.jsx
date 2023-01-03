import React from "react";
import { Link } from "react-router-dom";
import "./country.scss";
function Country({ country }) {
  return (
    <Link to={`/country/`+ country.name} style={{textDecoration: 'none'}}>
      <div
        className="country"
        style={{ cursor: "pointer" }}
      >
        <img src={country.flags.png} alt="country" />
        <div className="info">
          <h3>{country.name}</h3>
          <p>
            <span>Population:</span> {country.population}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
          <p>
            <span>Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
