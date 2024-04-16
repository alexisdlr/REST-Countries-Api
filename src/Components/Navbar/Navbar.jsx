import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useThemeStore } from "../../store/theme-store";
import "./navbar.scss";

function Navbar() {
  const { darkMode ,toggleDarkMode } = useThemeStore();
  return (
    <header className="Navbar">
      <div>
        <h2>Where in the world?</h2>
      </div>
      <div>
        <button
          onClick={toggleDarkMode}
        
        >
          {darkMode ?  <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
          <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
        </button>
      </div>
    </header>
  );
}

export default Navbar;