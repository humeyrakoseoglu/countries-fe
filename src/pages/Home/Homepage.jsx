import '../../style/Home/HomePage.css';
import AppBar from '../../components/AppBar/AppBar';
import CountriesList from '../../components/CountriesView/CountriesList';

function Homepage() {

    return (
      <div className="HomePage">
      <AppBar />
        <div className="main" >
          <CountriesList />
        </div>
      </div>
      );
}

export default Homepage;