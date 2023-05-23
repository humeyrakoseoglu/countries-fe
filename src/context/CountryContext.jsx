import React, { createContext, useEffect, useState ,useContext} from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {

  const url = 'http://localhost:8080/countries';

  const [countriesList, setCountriesList] = useState([]);

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const [gridView, setGridView] = useState(false);
  const [gridViewMode, setGridViewMode] = useState(gridView);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [sortType, setSortType] = useState('asc');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filterValues, setFilterValues] = useState({
    currency: '',
    phone: 0,
    continent: ''
  });

  //GET ALL COUNTRIES OPERATION
  useEffect(() => {
    fetch(url + '/getCountries')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountriesList(result);
          setResults(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //SEARCH OPERAION
  const searchItems = async (searchValue) => {
    setInput(searchValue);
    console.log(searchValue);
      // Filter countries based on search query
      const searchedCountries = countriesList.filter((country) => {
        return (
          country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          country.code.toLowerCase().includes(searchValue.toLowerCase())
        );
      });

    setResults(searchedCountries);
    console.log(searchedCountries);  
    console.error('Error searching countries:', error)
  };

  useEffect(() => {
    fetchData(sortType);
    setGridViewMode(gridView);
  }, [sortType, gridView]);

  //GRID OPERATIONS
  const toggleGridView = () => {
    setGridView(!gridView);
  };

  const refresh = () => {
    setResults(countriesList);
  }

  //SORT OPERATIONS
  const fetchData = async (sortType) => {
    try {
      const response = await fetch(url + `/sorted/${sortType}`);
      if (!response.ok) {
        throw new Error('Failed to fetch countries.');
      }
      const result = await response.json();
      setResults(result);
      //setCountriesList(result);
      setIsLoaded(true);
    } catch (error) {
      setError(true);
      setIsLoaded(true);
      console.error(error);
    }
  };

  const toggleSort = () => {
    const newSortType = sortType === 'asc' ? 'dsc' : 'asc';
    setSortType(newSortType);
  };

  //DELETE OPERATIONS
  const handleDelete = (code) => {
    fetch(url + `/code/${code}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) {
          alert('Country successfully deleted.');
          setResults(results.filter((country)=>{
            return country.code !== code;
          }))
        } else {
          throw new Error('Error deleting country');
        }
      })
      .catch((error) => {
        console.error('Error deleting country:', error);
      })
      .finally(() => {
        setIsModalOpen(false);
      });
  };



  //MULTI FILTER OPERATIONS
  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleFilter = () => {
    filterCountries(
      filterValues.currency,
      filterValues.phone,
      filterValues.continent
    );
    console.log(filterCountries);
  };

  const filterCountries = async (currency, phone, continent) => {
    try {
      let apiUrl = url+'/filter?';

      if (currency) {
        apiUrl += `currency=${currency}&`;
      }
      if (phone) {
        apiUrl += `phone=${phone}&`;
      }
      if (continent) {
        apiUrl += `continent=${continent}`;
      }
      const response = await fetch(apiUrl);
      if (response.ok) {
        const filteredCountries = await response.json();
        setResults(filteredCountries);
        setFilterValues({
          currency: '',
          phone: 0,
          continent: ''
        });
      } else {
        console.error('Hata:', response.statusText);
      }
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  //VALUES
  const values = {
    gridView,
    toggleGridView,
    gridViewMode,
    filterCountries,
    filterValues, 
    setFilterValues,
    isFilterOpen, 
    setIsFilterOpen,
    handleFilterChange, 
    handleFilterToggle, 
    handleFilter,
    toggleSort,
    sortType,
    setSortType,
    input,
    setInput,
    searchItems,
    isModalOpen,
    setIsModalOpen,
    handleDelete,
    error,
    setError,
    isLoaded,
    setIsLoaded,
    results,
    refresh,
  };

  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
  );
};


export const useCountry = () => {
    const context = useContext(CountryContext);

    if(context === undefined){
        throw new Error('useCountry hook must be call inside CountryProvider component');
    }

    return context;
};