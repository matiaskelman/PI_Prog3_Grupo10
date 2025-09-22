import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Movie.css"  

class Movie extends Component {
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
   const recuperoFavoritos = localStorage.getItem('favoritos'); 
  const favoritosParseados = recuperoFavoritos !== null ? JSON.parse(recuperoFavoritos) : [];

const ids = favoritosParseados.map(function(elemento) { return elemento.id; });
if (ids.includes(this.state.informacionItem.id)) {
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
    const recuperoFavoritos = localStorage.getItem('favoritos')
    const favoritosParseados = recuperoFavoritos !== null ? JSON.parse(recuperoFavoritos) : [];
    favoritosParseados.push(this.state.informacionItem); 

    localStorage.setItem('favoritos', JSON.stringify(favoritosParseados));
    this.setState({ esFavorito: true });
  }

  sacarFavorito(id) {
    const recuperoFavoritos = localStorage.getItem('favoritos'); // ← películas
const favoritosParseados = recuperoFavoritos !== null ? JSON.parse(recuperoFavoritos) : [];

const filtroFavoritos = favoritosParseados.filter(function(elemento) {
  return elemento.id !== id;
});

localStorage.setItem('favoritos', JSON.stringify(filtroFavoritos));

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

          <button onClick={() => this.verDescripcion()} className="botonVerMas">
            {this.state.textoBoton}
          </button>

          {this.state.esFavorito ? (
            <button onClick={() => this.sacarFavorito(item.id)} className="botonQuitarFavorito">
              Sacar
            </button>
          ) : (
            <button onClick={() => this.agregarFavorito(item.id)} className="botonAgregarFavorito">
              Agregar
            </button>
          )}

         <Link to={`/Detalle/1${item.id}`} className="botonVerDetalle">

            Ver detalle
          </Link>
        </div>
      </article>
    );
  }
}

export default Movie;
