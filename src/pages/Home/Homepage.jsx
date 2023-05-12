import '../../style/Home/HomePage.css';
import AppBar from '../../components/AppBar/AppBar';
import CountriesList from '../../components/CountriesList/CountriesList';
import React, { useState } from 'react';

function Homepage() {
  const [searchInput, setSearchInput] = useState('');

    return (
        <div className="HomePage">
            <AppBar setSearchInput={setSearchInput} />
            <div className="main" >
               <CountriesList  searchInput={searchInput}/>
            </div>
        </div>
      );
}

export default Homepage;