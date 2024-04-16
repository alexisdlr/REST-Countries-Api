import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCountriesStore } from "../../store/countries-store";
import "./country-detail.scss";

function CountryDetails() {
  const { countries } = useCountriesStore();
  const countryName = useLocation().pathname.split("/")[2];
  const currentCountry = countries.find(
    (c) => c.name.toLowerCase().split(" ").join("-") === countryName
  );

  return (
    <>
      {currentCountry ? (
        <div className="SingleCountry">
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
              <img src={currentCountry.flags.svg} alt="country" />
            </div>
            <div className="country-info">
              <div className="top-info">
                <div>
                  <h1>{currentCountry.name}</h1>
                  <p>
                    <span>Native name: </span>
                    {currentCountry.nativeName}
                  </p>
                  <p>
                    <span>Population:</span> {currentCountry.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {currentCountry.region}
                  </p>
                  <p>
                    <span>Subregion:</span> {currentCountry.subregion}
                  </p>
                  <p>
                    <span>Capital:</span> {currentCountry.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Top level Domain: </span> {currentCountry.topLevelDomain}
                  </p>
                  <p>
                    <span>Languages: </span> {currentCountry.languages[0].name}
                  </p>
                  <p>
                    <span>Currencies: </span> {currentCountry.currencies[0].name}
                  </p>
                </div>
              </div>
              <div className="border-countries">
                <span>Border Countries: </span>
                {currentCountry.borders
                  ? currentCountry.borders.map((item, index) => (
                      <span key={index} className="border-country">
                        {item}
                      </span>
                    ))
                  : " No borders"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="NotFound">
          <h1>Country not found</h1>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
