import React from 'react'
import { Component } from 'react'
import Buscador from '../Buscador/Buscador'
class Header extends Component {
    render() {
  return (
    <>
                <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="movies.html">Películas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="series.html">Series</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="favorites.html">Favoritas</a>
                </li>
            </ul>
        
        {/* BUSCADOR */}
        <Buscador />
        </nav>
    </>
  )
} }
export default Header;
