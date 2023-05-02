import React from "react";
import Country from "../../Components/Country/Country";
import "./countries.scss";
import useCountries from "../../hooks/useCountries";
import { AnimatePresence } from "framer-motion";
function Countries({ filter }) {
  const { countries } = useCountries();
  return (
    <div className="countries">
      {filter.length > 0
        ? filter.map((country, index) => (
              <Country country={country} index={index} key={index} />
          ))
        : countries
        ? countries.map((country, index) => (
              <Country country={country} index={index} key={index} />
          ))
        : "no data"}
    </div>
  );
}

export default Countries;
