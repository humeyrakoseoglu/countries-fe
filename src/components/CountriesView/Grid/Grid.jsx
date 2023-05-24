import {useCountry} from '../../../context/CountryContext'
import { Link } from 'react-router-dom';
import '../../../style/CountriesList/CountriesList.css'

function Grid() { //Ülke listesini ızgara görünümünde göstermek için kullanılır.
  const { filteredResults } = useCountry();

  return (
    <div className="country-grid-container">
      <div className="country-cards__list">
        {filteredResults.map(({ code, name , flag, phone}) => (
         <Link to={`/countries/${code}`} style={{ textDecoration: 'none' }}  key={code}>
          <div key={code} className="country-card " >
            <img src={flag} alt={`Flag of ${code}`} />
            <h3 className="country-code">
              <p>{code}</p>
            </h3>
            <p className="country-name">
              <span>{name}</span>
            </p>
            <p className="country-phone">
              <span>Phone Code: {phone}</span>
            </p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Grid;