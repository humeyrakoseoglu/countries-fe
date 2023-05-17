import '../../../style/Card/Card.css';
import { Link } from 'react-router-dom';

import React from 'react';
function Card ({ countries, code, name, native, phone, continent, capital, currency, languages }){
  const flagUrl = 'http://aedemirsen.bilgimeclisi.com/country_flags/';// +"/"+id+".svg"

  return(
    <Link to={`/countries/${code}`} style={{ textDecoration: 'none' }}>
    <div className='card' >
    <img src={flagUrl + code + '.svg'} alt={`Flag of ${code}`} />
    <h2>{code}</h2>
    <ul className="card-item">    
    {name}    
    </ul>
    
  </div>
  </Link>
  );
}

export default Card;

