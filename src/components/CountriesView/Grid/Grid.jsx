import {useNavigate} from 'react-router-dom';
import "../../../style/CountriesList/CountriesList.css";

function Grid({ filteredCountries,code }) {

  const flagUrl = 'http://aedemirsen.bilgimeclisi.com/country_flags/';


  return (
    <div className="country-grid-container">
      <div className="country-cards__list">
      
        {filteredCountries.map(({ code, name }) => (
          <div key={code} className="country-card card" >
            <img src={flagUrl + code + '.svg'} alt={`Flag of ${code}`} />
            <h3 className="country-code">
              <p>{code}</p>
            </h3>
            <p className="country-name">
               {name}
            </p>
          </div>

        ))}

      </div>
    </div>
  );
}

export default Grid;