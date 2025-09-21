import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // system 1 (basic system)
    // // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // system 2 (ternary system)
    // setVisited(visited ? false : true);

    // system 3 (not sign system)
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name: {country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h4>Population: {country.population.population}</h4>
      <h4>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </h4>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.flags.png);
        }}
      >
        Add country flag
      </button>
    </div>
  );
};

export default Country;
