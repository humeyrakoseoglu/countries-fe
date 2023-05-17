import countries from "../../data/countries.json"
import React, { useState, useEffect } from 'react';
import '../../style/CountriesList/CountriesList.css';
import List from "./List/List";
import Grid from "./Grid/Grid";

function CountriesList({ searchInput, gridView }) {
  const [gridViewMode, setGridViewMode] = useState(gridView);

  useEffect(() => {
    setGridViewMode(gridView);
  }, [gridView]);

  
    const filteredCountries = Object.keys(countries)
    .filter(
      (code) =>
        countries[code].name.toLowerCase().includes(searchInput.toLowerCase()) ||
        code.toLowerCase().includes(searchInput.toLowerCase())
    )
    .map((code) => ({
      code,
      name: countries[code].name,
      native: countries[code].native,
      phone: countries[code].phone,
      continent: countries[code].continent,
      capital: countries[code].capital,
      currency: countries[code].currency,
      languages: countries[code].languages,
    }));
    console.log('filteredCountries:', filteredCountries);

    return (
     // <ul className={gridViewMode ? "countryList-grid" : "countryList"}>
     <div>
     {gridViewMode ?
       <Grid filteredCountries={filteredCountries} />
      : 
       <List filteredCountries={filteredCountries} />
     }
   </div>
    );
}

export default CountriesList;