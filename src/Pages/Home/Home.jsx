import React from "react";
import Countries from "../Countries/Countries";
import "./Home.scss";
function Home() {
  return (
    <div className="Home">
      <div className="top-search">
        <input type={"text"} placeholder={"Search for a Country"} />
        <select>
          <option selected={true} disabled={true}>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="countries">
        <Countries />
      </div>
    </div>
  );
}

export default Home;
