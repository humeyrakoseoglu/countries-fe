import '../../style/Home/HomePage.css';
import AppBar from '../../components/AppBar/AppBar';
import CountriesList from '../../components/CountriesView/CountriesList';
import {useCountry} from '../../context/CountryContext'

function Homepage() {
    const {setSearchInput, searchInput, toggleGridView, gridView} = useCountry();

    return (
      <div className="HomePage">
      <AppBar setSearchInput={setSearchInput} gridView={gridView} toggleGridView={toggleGridView} />
        <div className="main" >
          <CountriesList  searchInput={searchInput} gridView={gridView} />
        </div>
      </div>
      );
}

export default Homepage;