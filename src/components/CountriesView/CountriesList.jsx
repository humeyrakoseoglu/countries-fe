import '../../style/CountriesList/CountriesList.css';
import List from "./List/List";
import Grid from "./Grid/Grid";
import {useCountry} from '../../context/CountryContext'


function CountriesList() {
  const { gridViewMode, results, error, isLoaded } = useCountry();
  //console.log('countriesList:', results);

  if(error) {
    return <div>ERROR !!!</div>;
  } else if(!isLoaded) {
    return <div>Loading...</div>;
  } else if (!results || results.length === 0) {
    return <div>No countries available.</div>;
  } else {
    return (
      <div>
       {gridViewMode ?
         <Grid countriesList={results} />
        : 
         <List countriesList={results} />
       }
      </div>
     );
  }
  
}

export default CountriesList;