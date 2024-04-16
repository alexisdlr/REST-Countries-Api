import "./countries.scss";
import { useCountriesStore } from "../../store/countries-store";
import Country from "../../Components/Country/Country";

function Countries({ filter }) {
  const { countries } = useCountriesStore();
  return (
    <div className="countries">
      {filter.length > 0
        ? filter.map((country, index) => (
              <Country country={country} index={index} key={index} />
          ))
        : countries
        ? countries.map((country, index) => (
              <Country country={country} index={index} key={index} />
          ))
        : "no data"}
    </div>
  );
}

export default Countries;
