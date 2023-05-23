import '../../style/AppBar/AppBar.css';
import {BsFillGridFill,BsList} from 'react-icons/bs';
import {FaSortAmountUpAlt, FaFilter} from 'react-icons/fa';
import React from 'react'
import {useCountry} from '../../context/CountryContext'

function AppBar (){ 
    const { 
      handleFilterChange, 
      refresh,searchItems, 
      handleFilterToggle, 
      handleFilter,
      filterValues, 
      isFilterOpen, 
      toggleGridView, 
      toggleSort,
      gridView} = useCountry();

      return (
        <div className="appBar">
          <div className="header">
          <span> COUNTRIES</span>
            <input
              type="text"
              id="searchButton"
              placeholder="Search.."
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
          <div className="subBar">
            <button className="button" id="gridButton" onClick={() => toggleGridView()}>
              {gridView ? <BsList /> : <BsFillGridFill />}
            </button>
            <div className="filterAndSortButtons">
              <button className="button" onClick={toggleSort}>
                <FaSortAmountUpAlt />
                Sort
              </button>
              <button className="button" onClick={handleFilterToggle}>
                <FaFilter />
                Filter
              </button>
            </div>
          </div>
          {isFilterOpen && (
            <div className="filterDropdown">
              <label>
                Currency:
                <input
                  type="text"
                  name="currency"
                  value={filterValues.currency}
                  onChange={handleFilterChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="number"
                  name="phone"
                  value={filterValues.phone}
                  onChange={handleFilterChange}
                />
              </label>
              <label>
                Continent:
                <input
                  type="text"
                  name="continent"
                  value={filterValues.continent}
                  onChange={handleFilterChange}
                />
              </label>
              <button className="applyButton" onClick={handleFilter}>Apply</button>
              <button className="cancelButton" onClick={refresh} > Cancel </button>
            </div>
          )}
        </div>
      );
    }
    
    export default AppBar;