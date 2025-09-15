// src/components/Header/Header.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';
import './eader.css';


class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <nav>
          <ul className="nav nav-tabs my-4">
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

          
          <Buscador />
        </nav>
      </header>
    );
  }
}

export default Header;

