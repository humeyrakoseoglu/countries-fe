import React, { createContext, useEffect, useState ,useContext} from 'react';
import countries from "../data/countries.json"

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');
  const [gridView, setGridView] = useState(false);
  const [gridViewMode, setGridViewMode] = useState(gridView);

  const toggleGridView = () => {
    setGridView(!gridView);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };     

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

  const values = {
    searchInput,
    setSearchInput,
    gridView,
    toggleGridView,
    handleInputChange,
    filteredCountries,
    gridViewMode
  }

  return (
    <CountryContext.Provider
      value={values}>{children}</CountryContext.Provider>
  );
};

export const useCountry = () => {
    const context = useContext(CountryContext);

    if(context === undefined){
        throw new Error('useCountry hook must be call inside CountryProvider component');
    }

    return context;
};