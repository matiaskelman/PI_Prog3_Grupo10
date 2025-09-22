import React, { Component } from "react";
import "./Footer.css"; 

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
             Programación III  
            <br />
            Universidad de San Andrés
          </p>

          <ul className="footer-list">
            <li>Matías Kelman</li>
            <li>Lautaro Poggi</li>
            <li>Lautaro Porta</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
