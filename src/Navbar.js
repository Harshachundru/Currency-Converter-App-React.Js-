import React from "react";
import './App.css';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return(
   
      <nav>
        <ul className="nav-links">
            <Link to="/">
            <li>CURRENCY CONVERTER</li>
            </Link>
            <Link to="/Rates">
            <li>CURRENT EXCHANGE RATES</li>
            </Link>
        </ul>
      </nav>
   
    
    );
}

export default Navbar;