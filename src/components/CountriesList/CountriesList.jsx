import countries from "../../data/countries.json"
import Card from '../Card/Card';

function CountriesList({ searchInput }) {
    const filteredCountries = Object.keys(countries)
    .filter(
      (code) =>
        countries[code].name.toLowerCase().includes(searchInput.toLowerCase()) ||
        code.toLowerCase().includes(searchInput.toLowerCase())
    )
    .map((code) => ({
      code,
      name: countries[code].name,
      native: countries[code].native,
      phone: countries[code].phone,
      continent: countries[code].continent,
      capital: countries[code].capital,
      currency: countries[code].currency,
      languages: countries[code].languages,
    }));
    return (
        <ul className='countryList'>
               {filteredCountries.map(({ code, name, native, phone, continent, capital, currency, languages }) => (
             <li key={code}>
               <Card  countries={countries} code={code} name={name} native={native} phone={phone} continent={continent} currency={currency} capital={capital} languages={languages} />
             </li>
          ))}
                 </ul>
    )
}

export default CountriesList;