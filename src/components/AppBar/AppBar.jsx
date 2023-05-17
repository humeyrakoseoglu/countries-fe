import '../../style/AppBar/AppBar.css';
import {BsFillGridFill,BsList} from 'react-icons/bs';
import {FaSortAmountUpAlt, FaFilter} from 'react-icons/fa';
import React from 'react'
import {useCountry} from '../../context/CountryContext'

function AppBar (){ 
    const { toggleGridView, gridView, handleInputChange} = useCountry();

    return(
    <div className='toolbar'>
        <div className='appBar'>
            COUNTRIES 
            <input type="text" id="searchButton"  placeholder="Search.." onChange={handleInputChange} ></input>
        </div>
        <div className='subBar'>
            <button className="button" id='gridButton'  onClick={() => toggleGridView()}> {gridView ? <BsList /> : <BsFillGridFill />}</button>
            <div className='filterAndSortButtons'>
                <button className="button" ><FaSortAmountUpAlt />Sort</button>
                <button className="button" ><FaFilter />Filter</button>
            </div>
        </div>
    </div>
    );
}

export default AppBar;