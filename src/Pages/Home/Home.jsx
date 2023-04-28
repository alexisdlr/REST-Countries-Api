import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Countries from "../Countries/Countries";
import "./Home.scss";
import Loader from "../../Components/Loader/Loader";
import useCountries from "../../hooks/useCountries";
import SelectCountry from "../../Components/SelectCountry";
function Home() {
  const { countries, loading, setLoading} = useCountries()
  const [filter, setFilter] = useState([])
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    setFilter(countries.filter(c => c.name === e.target.value));
    setInput("");
  };
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
          <button onClick={handleClick}>Search</button>
        </div>
       <SelectCountry setFilter={setFilter} />
      </div>
      <div className="countries">
        {loading ? (
          <Loader />
        ) : (
          <Countries filter={filter} />
        )}
      </div>
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
