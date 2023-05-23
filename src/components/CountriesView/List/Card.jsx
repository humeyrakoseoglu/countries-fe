import '../../../style/Card/Card.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ flag, code, name, phone }) {

  return (
    <Link to={`/countries/${code}`} className="card-link">
      <div className="card">
        <img src={flag} alt={`Flag of ${code}`} />
        <div className="card-item" >
          <h2>{code}</h2>
          <p >{name}</p>
          <p>Phone code: {phone}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;

