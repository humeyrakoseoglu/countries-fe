import React from 'react';
import { useParams } from 'react-router-dom';
import countries from '../../data/countries.json';
import '../../style/Popup/Popup.css'
function DetailsPage() {
    const flagUrl = 'http://aedemirsen.bilgimeclisi.com/country_flags/';

  const { code } = useParams();
  const country = countries[code];

  if (!country) {
    return <div>Country not found</div>;
  }

  const {
    name,
    native,
    phone,
    continent,
    capital,
    currency,
    languages,
  } = country;

  return (
    <div className='popup-card'>
          <img src={flagUrl + code + '.svg'} alt={`Flag of ${code}`} />
          <ul className="popup-card-item">
            <li>Code: {code}</li>
            <li>Name: {name}</li>
            <li>Native: {native}</li>
            <li>Phone: {phone}</li>
            <li>Continent: {continent}</li>
            <li>Capital: {capital}</li>
            <li>Currency: {currency}</li>
            <li>Languages: {languages}</li>
          </ul>
        </div>
  );
}

export default DetailsPage;
