import React from 'react';
import ReactDOM from 'react-dom';
import '../../style/Popup/Popup.css';

const flagUrl = 'http://aedemirsen.bilgimeclisi.com/country_flags/';// +"/"+id+".svg"
const Popup = ({ isShowing, hide, code, name, native,phone,continent,capital,currency,languages }) => isShowing ? ReactDOM.createPortal(

    
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
        <h1>Country Details</h1>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <div className='popup-card'>
         <img src={flagUrl + code + '.svg'} alt={`Flag of ${code}`} />
          <ul className="popup-card-item">
            <li >Code: {code}</li>
            <li>Name: {name}</li>
            <li>Native: {native}</li>
            <li>Phone: {phone}</li>
            <li>Continent: {continent}</li>
            <li>Capital: {capital}</li>
            <li>Currency: {currency}</li>
            <li>Languages: {languages}</li>
          </ul>     
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Popup;