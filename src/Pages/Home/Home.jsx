import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Countries from "../Countries/Countries";
import "./Home.scss";
import { makeRequest } from "../../axios";
import { ThreeDots } from "react-loader-spinner";
function Home() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    makeRequest.get(`/name/` + input).then((res) => {
      setCountryFilter(res.data);
      setLoading(false);
    });
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
        <select name='region' onChange={handleChangeSelect}>
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
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <Countries filter={countryFilter} />
        )}
      </div>
      <div className="attribution">
        <p>
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target={"_blank"}
          > Frontend Mentor</a>.
          Coded by{" "}
          <a href="https://github.com/alexisdlr" target={"_blank"}>
            Alexis De Leon.
          </a>
        </p>
      </div>
    </main>
  );
}

export default Home;
