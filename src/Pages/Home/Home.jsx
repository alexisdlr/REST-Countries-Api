import { useEffect, useState, useCallback } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Countries from "../Countries/Countries";
import "./Home.scss";
import Loader from "../../Components/Loader/Loader";
import SelectCountry from "../../Components/SelectCountry";
import { useCountriesStore } from "../../store/countries-store";
function Home() {
  const { countries, loading } = useCountriesStore();
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const searchCountries = useCallback(
    debounce((value) => {
      setDebouncedSearchTerm(value);
    }, 500),
    []
  );

  useEffect(() => {
    searchCountries(input);
  }, [input, searchCountries]);

  useEffect(() => {
    const filtered = countries.filter(
      (country) =>
        ["US", "BR", "IS", "AF", "AX", "AL", "DZ", "DE"].includes(
          country.alpha2Code
        ) &&
        country.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilter(filtered);
  }, [countries, debouncedSearchTerm]);
  return (
    <main className="Home">
      <div className="top-search">
        <div className="input">
          <SearchOutlinedIcon />
          <input
            type={"text"}
            placeholder={"Search for a Country"}
            onChange={handleChange}
            value={input}
          />
        </div>
        <SelectCountry setFilter={setFilter} />
      </div>
        {loading ? <Loader /> : <Countries filter={filter} />}
      <div className="attribution">
        <p>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target={"_blank"}
          >
            {" "}
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/alexisdlr" target={"_blank"}>
            Alexis De Leon.
          </a>
        </p>
      </div>
    </main>
  );
}

export default Home;
