import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
          onChange={this.controlarInput}
        />
        <label><input type="radio" name="tipo" value="movie" onChange={this.controlarRadio}/> Películas</label>
        <label><input type="radio" name="tipo" value="tv" onChange={this.controlarRadio}/> Series</label>
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);