import { useParams } from 'react-router-dom';
import '../../style/Detail/DetailsPage.css';
import { useCountry } from '../../context/CountryContext';
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io';

function DetailsPage() {
  const { results, handleDelete,isModalOpen, setIsModalOpen } = useCountry();
  const { code } = useParams();
  const country = results.find((country) => country.code === code);

  if (!country) {
    return (
    <div className='noFound'>  
      <Link to="/">
        <button className="btn" ><IoMdArrowRoundBack/> </button>
      </Link> 
      <span>  Country not found</span>
    </div>);
  }

  return (
    <>
      <div className='detail-card'>
        <div className='detail-header'>
          <h1>Country Details</h1>
          <button type='button' className='close' onClick={() => setIsModalOpen(true)}>
            DELETE
          </button>
        </div>
        <div className='detail-content'>
          <img src={country.flag} alt={`Flag of ${code}`} />
          <ul className='detail-card-item'>
            <li>Code: {code}</li>
            <li>Name: {country.name}</li>
            <li>Native: {country.native}</li>
            <li>Phone: {country.phone}</li>
            <li>Continent: {country.continent}</li>
            <li>Capital: {country.capital}</li>
            <li>Currency: {country.currency}</li>
            <li>Languages: {country.languages}</li>
          </ul>
        </div>
      </div>
      <Modal className='modal' isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this country?</p>
        <button onClick={() => handleDelete(code)} className='delete-button'>
          Delete
        </button>
        <button onClick={() => setIsModalOpen(false)} className='cancel-button'>
          Cancel
        </button>
      </Modal>
    </>
  );
}

export default DetailsPage;