import Card from './Card';
import "../../../style/CountriesList/CountriesList.css";
import {useCountry} from '../../../context/CountryContext'

function List() {
    const { filteredResults } = useCountry();

      return (
        <ul className="countryList">
          {filteredResults.map(({ flag, code, name, native, phone, continent, capital, currency, languages }) => (
            <li key={code}>
              <Card
                countries={filteredResults}
                code={code}
                name={name}
                native={native}
                phone={phone}
                continent={continent}
                currency={currency}
                capital={capital}
                flag={flag}
                languages={languages}
              />
            </li>
          ))}
        </ul>
      );
}
  
export default List;