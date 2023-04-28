import { useContext } from "react";
import { CountriesContext } from "../Context/CountriesContext";

const useCountries = () => {
  return useContext(CountriesContext);
};
export default useCountries;
