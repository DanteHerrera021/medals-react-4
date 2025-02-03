import { useRef, useState } from "react";
import "./App.css";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 }
  ]);

  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" }
  ]);

  function incrementMedal(countryId, medal) {
    setCountries((prevCountries) => {
      const updatedCountries = prevCountries.map((country) => {
        if (country.id === countryId) {
          return { ...country, [medal]: country[medal] + 1 };
        }
        return country;
      });

      return updatedCountries;
    });
  }

  function decrementMedal(countryId, medal) {
    setCountries((prevCountries) => {
      const updatedCountries = prevCountries.map((country) => {
        if (country.id === countryId && country[medal] != 0) {
          return { ...country, [medal]: country[medal] - 1 };
        }
        return country;
      });

      return updatedCountries;
    });
  }

  // function increaseGold(countryId) {}
  function removeCountry(countryId) {
    setCountries(countries.filter((c) => c.id !== countryId));
  }

  return (
    <>
      <h1>Olympic Countries</h1>
      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
          medals={medals}
          removeCountry={removeCountry}
          incrementMedal={incrementMedal}
          decrementMedal={decrementMedal}
        />
      ))}
    </>
  );
}

export default App;
