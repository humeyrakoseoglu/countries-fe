import '../../style/CountriesList/CountriesList.css';
import List from "./List/List";
import Grid from "./Grid/Grid";
import {useCountry} from '../../context/CountryContext'

function CountriesList() { // Ülkelerin listelendiği componenttir. List ve Grid componentlerini dinamik olarak gösterir.
  const { gridViewMode, filteredResults, error, isLoaded } = useCountry();

  if(error) {
    return <div>Error</div>;
  } else if(!isLoaded) {
    return <div>Loading...</div>;
  } else if (!filteredResults || filteredResults.length === 0) {
    return <div>Countries not found.</div>;
  } else {
    return (
      <div>
       {gridViewMode ?
         <Grid />
        : 
         <List />
       }
      </div>
     );
  }
}

export default CountriesList;