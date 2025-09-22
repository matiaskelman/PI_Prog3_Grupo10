import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './buscador.css'
class Buscador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: '',
            tipo: ""
        };
    }

  controlarForm = (evento) => {
    evento.preventDefault();
    const texto = this.state.busqueda;
    const tipo = this.state.tipo;
    const path = tipo ? `/resultados/${texto}/${tipo}` : `/resultados/${texto}`;
    this.props.history.push(path);
  };
  controlarInput = (evento) => {
    this.setState({ busqueda: evento.target.value });
  };

   controlarRadio = (evento) => {
    this.setState({ tipo: evento.target.value });
    
  };

    render() {
        return (
      <form className="search-form" onSubmit={this.controlarForm} method="get">
        <input
          type="text"
          name="searchData"
          placeholder="Buscar..."
          value={this.state.busqueda}
          onChange={this.controlarInput} required/>
        <label><input type="radio" name="tipo" value="movie" onChange={this.controlarRadio} required/> Películas</label>
        <label><input type="radio" name="tipo" value="tv" onChange={this.controlarRadio} required/> Series</label>
        <button type="submit" className="botonBuscar">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);