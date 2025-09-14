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
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Peliculas">Películas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Series">Series</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Favoritos">Favoritos</a>
                </li>
            </ul>
        
        {/* BUSCADOR */}
        <Buscador />
        </nav>
    </>
  )
} }
export default Header;
