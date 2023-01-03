import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Countries from "../Countries/Countries";
import "./Home.scss";
import { makeRequest } from "../../axios";
function Home() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [countryFilter, setCountryFilter] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeSelect = (e) => {
    makeRequest
      .get(`/region/` + e.target.value)
      .then((res) => setCountryFilter(res.data));
  };
  const handleClick = (e) => {
    e.preventDefault();
    makeRequest.get(`/name/` + input).then((res) => setCountryFilter(res.data));
    setInput("");
  };
  return (
    <div className="Home">
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
        <select onChange={handleChangeSelect} >
          <option selected={true} disabled={true}>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="countries">
        <Countries filter={countryFilter} />
      </div>
      <div >
        <p>Coded by <a href="https://github.com/alexisdlr" target={'_blank'} >Alexis De Leon</a></p>
      </div>
    </div>
  );
}

export default Home;
