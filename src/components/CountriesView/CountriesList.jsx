import '../../style/CountriesList/CountriesList.css';
import List from "./List/List";
import Grid from "./Grid/Grid";
import {useCountry} from '../../context/CountryContext'

function CountriesList() {
  const { gridViewMode, filteredCountries} = useCountry();

  console.log('filteredCountries:', filteredCountries);

  return (
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