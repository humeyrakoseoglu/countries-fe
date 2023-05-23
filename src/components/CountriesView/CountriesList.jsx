import '../../style/CountriesList/CountriesList.css';
import List from "./List/List";
import Grid from "./Grid/Grid";
import {useCountry} from '../../context/CountryContext'

function CountriesList() {
  const { gridViewMode, filteredResults, error, isLoaded } = useCountry();

  if(error) {
    return <div>ERROR !!!</div>;
  } else if(!isLoaded) {
    return <div>Loading...</div>;
  } else if (!filteredResults || filteredResults.length === 0) {
    return <div>No countries available.</div>;
  } else {
    return (
      <div>
       {gridViewMode ?
         <Grid countriesList={filteredResults} />
        : 
         <List countriesList={filteredResults} />
       }
      </div>
     );
  }
}

export default CountriesList;