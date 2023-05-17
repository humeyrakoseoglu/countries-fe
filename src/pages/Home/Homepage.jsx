import '../../style/Home/HomePage.css';
import AppBar from '../../components/AppBar/AppBar';
import CountriesList from '../../components/CountriesView/CountriesList';
import React, { useState } from 'react';

function Homepage() {
  const [searchInput, setSearchInput] = useState('');
  const [gridView, setGridView] = useState(false);

  const toggleGridView = () => {
    setGridView(!gridView);
  };

    return (
      <div className="HomePage">
      <AppBar setSearchInput={setSearchInput} gridView={gridView} toggleGridView={() => toggleGridView(!gridView)} />
            <div className="main" >
               <CountriesList  searchInput={searchInput} gridView={gridView} />
            </div>
        </div>
      );
}

export default Homepage;