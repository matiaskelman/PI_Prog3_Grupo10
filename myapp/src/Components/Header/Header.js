import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';


class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          
          <ul className="navUl">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Peliculas">Películas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Series">Series</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Favoritos">Favoritos</Link>
            </li>
            
          </ul>
            <img src="../logo.png"  className="logo" /> 
         
                    
        </nav>
        
      </header>
    );
  }
}

export default Header;

