import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import "./Navbar.scss";
function Navbar() {
  const { darkMode, toggle } = useContext(DarkModeContext);
  return (
    <header className="Navbar">
      <div>
        <h2>Where in the world?</h2>
      </div>
      <div>
        <span onClick={toggle} style={{ cursor: "pointer", display: 'flex', alignItems: 'center', gap: '5px'}}>
          {darkMode ? (
            <DarkModeOutlinedIcon />
            ) : (
            <WbSunnyOutlinedIcon  />
          )}
          <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
        </span>
      </div>
    </header>
  );
}

export default Navbar;
