import '../App.css'
import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


const Header = ()=>{
    return(
     <div className="header">
     <div className="logo">
          <img src="https://snipboard.io/2DJSxv.jpg" alt="3sc Logo"  className='logo-img'/>
        </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li><Link to="/product">Products</Link></li>
          <li>Contact</li>
          <li><FontAwesomeIcon icon={faShoppingCart} className="icon" /></li>
          <li><FontAwesomeIcon icon={faUser} className="icon" /></li>
        </ul>
      </nav>
    </div>
    )
}

export default Header