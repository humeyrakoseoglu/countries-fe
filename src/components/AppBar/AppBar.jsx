import '../../style/AppBar/AppBar.css';
import {BsFillGridFill} from 'react-icons/bs';
import {FaSortAmountUpAlt, FaFilter} from 'react-icons/fa';
import React from 'react'

function AppBar ({ setSearchInput }){ 
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
      };

    return(
    <div className='toolbar'>
        <div className='appBar'>
            COUNTRIES 
            <input type="text" id="mySearch"  placeholder="Search.." title="Which country" onChange={handleInputChange} ></input>
        </div>
        <div className='subBar'>
            <button className="btn" id='gridButton' ><BsFillGridFill /></button>
            <div className='filterAndSortButtons'>
                <button className="btn" ><FaSortAmountUpAlt />Sort</button>
                <button className="btn" ><FaFilter />Filter</button>
            </div>
        </div>
    </div>
);}

export default AppBar;