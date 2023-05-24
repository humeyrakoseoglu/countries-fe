import Card from './Card';
import "../../../style/CountriesList/CountriesList.css";
import {useCountry} from '../../../context/CountryContext'

function List() {//Ülkeleri liste görünümünde göstermek için kullanılır.
    const { filteredResults } = useCountry();

      return (
        <ul className="countryList">
          {filteredResults.map(({ flag, code, name, phone }) => (
            <li key={code}>
              <Card
                code={code}
                name={name}
                phone={phone}
                flag={flag}
              />
            </li>
          ))}
        </ul>
      );
}
  
export default List;