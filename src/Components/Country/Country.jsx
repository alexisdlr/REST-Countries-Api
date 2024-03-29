import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./country.scss";
function Country({ country, index }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.3,
      },
    }),
  };
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      custom={{ delay: (index + 1) * 0.1 }}
      variants={variants}
      viewport={{ once: true }}
    >
      <Link to={`/country/` + country.name} style={{ textDecoration: "none" }}>
        <div className="country" style={{ cursor: "pointer" }}>
          <img src={country.flags.png} alt="country" />
          <div className="info">
            <h3>{country.name}</h3>
            <p>
              <span>Population:</span> {country.population}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default Country;
