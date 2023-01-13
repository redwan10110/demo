import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import './Country.css';
const Country = () => {
  const [countries, setCountries] = useState([]);
  const [abc, setAbc]= useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [abc]);
  const handleRefetch = ()=>{
    setAbc(true);
  }
  return (
    <div>
      <button onClick={handleRefetch}>Re Fetch</button>
      <h1>Rest Countries:{countries.length}</h1>

      <div className="container">
        {countries.map((country) => (
          <CountryCard country={country} key={country.ccn3}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Country;
