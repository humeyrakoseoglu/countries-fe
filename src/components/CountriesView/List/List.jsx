import Card from './Card';
import "../../../style/CountriesList/CountriesList.css";

function List({ filteredCountries }) {
    console.log('filteredCountries prop:', filteredCountries);

    return (
      <ul className= "countryList">
      {filteredCountries.map(({ code, name, native, phone, continent, capital, currency, languages }) => (
             <li key={code} >
               <Card  countries={filteredCountries} code={code} name={name} native={native} phone={phone} continent={continent} currency={currency} capital={capital} languages={languages} />
             </li>
          ))}
      </ul>
    );
}

export default List;