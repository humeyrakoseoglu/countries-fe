import {useCountry} from '../../../context/CountryContext'
import { Link } from 'react-router-dom';

function Grid() {
  const { filteredCountries } = useCountry();

  const flagUrl = 'http://aedemirsen.bilgimeclisi.com/country_flags/';

  return (
    <div className="country-grid-container">
      <div className="country-cards__list">
        {filteredCountries.map(({ code, name }) => (
         <Link to={`/countries/${code}`} style={{ textDecoration: 'none' }}  key={code}>
          <div key={code} className="country-card card" >
            <img src={flagUrl + code + '.svg'} alt={`Flag of ${code}`} />
            <h3 className="country-code">
              <p>{code}</p>
            </h3>
            <p className="country-name">
              <span>{name}</span>
            </p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Grid;