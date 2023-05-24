import React, { createContext, useEffect, useState ,useContext} from 'react';

//Create Context API for state management
const CountryContext = createContext();

export const CountryProvider = ({ children }) => {

  const url = 'http://localhost:4141/countries';

  const [countriesList, setCountriesList] = useState([]);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [gridView, setGridView] = useState(false);
  const [gridViewMode, setGridViewMode] = useState(gridView);

  const [sortType, setSortType] = useState('asc');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterValues, setFilterValues] = useState({
    currency: '',
    phone: 0,
    continent: ''
  });

  useEffect(() => { //bileşen yüklendiğinde yürütülür ve fetchCountries işlevini çağırarak ülkelerin listesini alır
    fetchCountries();
  }, []);

  useEffect(() => { //fetchSortData işlevini çağırarak sıralama işlemini gerçekleştirir 
    fetchSortData(sortType);
  }, [sortType]);

  useEffect(() => { //setGridViewMode işlevini çağırarak gridView durum değişkenini günceller
    setGridViewMode(gridView);
  }, [ gridView]);

  //GET ALL COUNTRIES OPERATION
  const fetchCountries = () => { // Tüm ülkeleri almak için API'yi çağırır ve uygun durum değişkenlerine yerleştirir.
    fetch(url + '/getCountries')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountriesList(result);
          setResults(result);
          setFilteredResults(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  //SEARCH OPERATION
  const searchItems = async (searchValue) => { // Arama işlemini gerçekleştirir ve arama sonucunu filteredResults durum değişkenine yerleştirir.
    setInput(searchValue);
      try {
      const searchedCountries = results.filter((country) => {
        return (
          country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          country.code.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
     setFilteredResults(searchedCountries);
      } catch (error) {
        console.error('Error searching countries:', error)
      }
  };

  //GRID OPERATIONS
  const toggleGridView = () => {  //Grid görünümünü açıp kapatır.
    setGridView(!gridView);
  };

  //Refresh CountriesList
  const refresh = () => { //Ülkelerin listesini yeniler.
    setResults(countriesList);
  }

  //SORT OPERATIONS
  const fetchSortData = async (sortType) => { //Sıralama işlemini gerçekleştirir ve sıralanmış ülkelerin listesini results durum değişkenine yerleştirir.
    try {
      const response = await fetch(url + `/sorted/${sortType}`);
      if (!response.ok) {
        throw new Error('Failed to fetch countries.');
      }
      const result = await response.json();
      setResults(result);
      setIsLoaded(true);
    } catch (error) {
      setError(true);
      setIsLoaded(true);
      console.error('Error sorting country:', error);
    }
  };

  const toggleSort = () => { //Sıralama türünü değiştirir.
    const newSortType = sortType === 'asc' ? 'dsc' : 'asc';
    setSortType(newSortType);
  };

  //DELETE OPERATIONS
  const handleDelete = (code) => { // Bir ülkeyi siler.
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

  const handleFilterChange = (event) => { //Filtreleme panelini açar veya kapatır.
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleFilter = () => { //Filtrelemeyi gerçekleştirir.
    filterCountries(
      filterValues.currency,
      filterValues.phone,
      filterValues.continent
    );
    //console.log(filterCountries);
  };

  const filterCountries = async (currency, phone, continent) => { //Ülkeleri filtreler ve filtrelenmiş sonuçları results durum değişkenine yerleştirir.
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
      } else {
        console.error('Hata:', response.statusText);
      }
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  useEffect(() => { //results veya input değiştiğinde yürütülür ve ülkeleri filtreler ve filteredResults durum değişkenine yerleştirir.
   const searchedCountries = results.filter((country) => {
    return (
      country.name.toLowerCase().includes(input.toLowerCase()) ||
      country.code.toLowerCase().includes(input.toLowerCase())
    );
  });
  setFilteredResults(searchedCountries);
  }, [results, input]);

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
    filteredResults,
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


export const useCountry = () => { //useContext kullanılarak CountryContext değerlerine erişilir ve bu değerler döndürülür. 
    const context = useContext(CountryContext);

    if(context === undefined){
        throw new Error('useCountry hook must be call inside CountryProvider component');
    }

    return context;
};