import '../../../style/Card/Card.css';
import React from 'react';

function Card ({ code, name, native, phone, continent, capital, currency, languages }){
  const flagUrl = 'http://aedemirsen.bilgimeclisi.com/country_flags/';// +"/"+id+".svg"

  return(
    <div className='card'>
    <img src={flagUrl + code + '.svg'} alt={`Flag of ${code}`} />
    <h2>{code}</h2>
    <ul className="card-item">    
    {name}    
    </ul>
  </div>
  );
}

export default Card;

