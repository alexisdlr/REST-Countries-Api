import React from "react";
import useCountries from "../hooks/useCountries";

const SelectCountry = ({setFilter}) => {
  const {countries} = useCountries()

  const handleChangeSelect = (e) => {
    setFilter(countries.filter(c => c.region === e.target.value))
  };
  return (
    <select name="region" onChange={handleChangeSelect}>
      <option selected={true} disabled={true}>
        Filter by Region
      </option>
      <option value="all">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectCountry;
