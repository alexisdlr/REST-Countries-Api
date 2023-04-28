import { createContext, useState, useEffect } from "react";
import { makeRequest } from "../axios";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoading(true)
        const {data} = await makeRequest.get('/all')
        setCountries(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    };
    getCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{countries, loading, setLoading, setCountries}}>
      {children}
    </CountriesContext.Provider>
  );
};
