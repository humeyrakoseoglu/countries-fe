import '../../style/Card/Card.css';
import React from 'react';
import Modal from "../../components/Popup/Popup";
import useModal from "../../components/Popup/usePopup";

function Card ({ code, countries }){
  const flagUrl = 'http://aedemirsen.bilgimeclisi.com/country_flags/';// +"/"+id+".svg"
  const {isShowing, toggle} = useModal();

  return(

  <div className='card' onClick={toggle} >    
    <img src={flagUrl + code + '.svg'} alt={`Flag of ${code}`} />
    <h2>{code}</h2>
    <ul className="card-item">    
    {countries[code].name}    
    </ul>
    <Modal code={code} name={countries[code].name} native={countries[code].native} phone={countries[code].phone} continent={countries[code].continent} currency={countries[code].currency} capital={countries[code].capital} languages={countries[code].languages}
        isShowing={isShowing}
        hide={toggle}
    />  
  </div>
);
}

export default Card;

