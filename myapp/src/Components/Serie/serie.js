import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./serie.css"  

class Serie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esFavorito: false,
      verMas: false,
      textoBoton: 'Ver más',
      informacionItem: props.data
    };
  }

  componentDidMount() {
    const recuperoFavoritos = localStorage.getItem('favoritosSeries');
    const favoritosParseados = recuperoFavoritos !== null ? JSON.parse(recuperoFavoritos) : [];
    if (favoritosParseados.includes(this.state.informacionItem.id)) {
      this.setState({ esFavorito: true });
    }
  }

  verDescripcion() {
    this.setState({
      verMas: !this.state.verMas,
      textoBoton: this.state.textoBoton === 'Ver más' ? 'Ver menos' : 'Ver más'
    });
  }

  agregarFavorito(id) {
    const recuperoFavoritos = localStorage.getItem('favoritosSeries');
    const favoritosParseados = recuperoFavoritos !== null ? JSON.parse(recuperoFavoritos) : [];
    favoritosParseados.push(id);
    localStorage.setItem('favoritosSeries', JSON.stringify(favoritosParseados));
    this.setState({ esFavorito: true });
  }

  sacarFavorito(id) {
    const recuperoFavoritos = localStorage.getItem('favoritosSeries');
    const favoritosParseados = recuperoFavoritos !== null ? JSON.parse(recuperoFavoritos) : [];
    const filtroFavoritos = favoritosParseados.filter(f => f !== id);
    localStorage.setItem('favoritosSeries', JSON.stringify(filtroFavoritos));
    this.setState({ esFavorito: false });
  }

  render() {
    const item = this.state.informacionItem;
    const titulo = item.name != null ? item.name : item.title;
    const verificacion = `/serie/detalle/${item.id}`;

    return (
      <article className="ficha">
        {item.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
            alt={titulo != null ? titulo : ''}
            className="img"
          />
        ) : null}

        <div className="cuerpo">
          <h5 className="tititulo">{titulo}</h5>

          {this.state.verMas && item.overview ? (
            <p className="descrip">{item.overview}</p>
          ) : null}

          <button onClick={() => this.verDescripcion()} className="btn btn--pri btn--sm">
            {this.state.textoBoton}
          </button>

          {this.state.esFavorito ? (
            <button onClick={() => this.sacarFavorito(item.id)} className="btn btn--adv btn--sm">
              Sacar
            </button>
          ) : (
            <button onClick={() => this.agregarFavorito(item.id)} className="btn btn--adv btn--sm">
              Agregar
            </button>
          )}

          <Link to={`/detalle/2${item.id}`} className="btn btn--ol btn--sm">
            Ver detalle
          </Link>
        </div>
      </article>
    );
  }
}

export default Serie;
