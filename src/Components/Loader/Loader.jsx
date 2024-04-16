import { useThemeStore } from "../../store/theme-store";
import { ThreeDots } from "react-loader-spinner";
import "./Loader.scss";

 function Loader() {
  const {darkMode} = useThemeStore();
  return (
    <div className="Loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={darkMode ? "#fff" : "#000"}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loader;

