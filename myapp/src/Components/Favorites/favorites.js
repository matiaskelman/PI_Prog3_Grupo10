import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Favoritos extends Component {
  constructor(props){
    super(props);
    this.state = {
      favoriteMovies: [],
      favoriteSeries: []
    };
  }
  
  componentDidMount(){
    this.refrescar();
  }
  
  refrescar(){
    const moviesRaw = localStorage.getItem('favoritos');          
    const seriesRaw = localStorage.getItem('favoritosSeries');    

    let movies = [];
    let series = [];

    if (moviesRaw !== null) {
      movies = JSON.parse(moviesRaw);
    }
    if (seriesRaw !== null) {
      series = JSON.parse(seriesRaw);
    }

    this.setState({
      favoriteMovies: movies,
      favoriteSeries: series
    });
  }

  removeFavorite = (type, id) => {
    if (type === 'movie') {
      const updated = this.state.favoriteMovies.filter(item => item.id !== id);
      localStorage.setItem('favoritos', JSON.stringify(updated));          // 👈 nuestra key
      this.setState({ favoriteMovies: updated });
    } else {
      const updated = this.state.favoriteSeries.filter(item => item.id !== id);
      localStorage.setItem('favoritosSeries', JSON.stringify(updated));    // 👈 nuestra key
      this.setState({ favoriteSeries: updated });
    }
  }

  borrarTodos(){
    localStorage.setItem('favoritos', JSON.stringify([]));                 // 👈 nuestra key
    localStorage.setItem('favoritosSeries', JSON.stringify([]));           // 👈 nuestra key
    this.setState({ favoriteMovies: [], favoriteSeries: [] });
  }

  renderItem = (item, type) => {
    return (
      <div key={item.id} className="card-article-popular-movies">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
        <h3>{item.original_title || item.title || item.original_name || item.name}</h3>
        <div>
          <Link to={`/Detalle/${item.id}`}>Ver detalle</Link> {/* ruta de tu App.js */}
          <button onClick={() => this.removeFavorite(type, item.id)}>Eliminar</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <main>
        <div className="favorites-container">
          <h1 className="page-title">Mis Favoritos</h1>
          
          <h2 className="section-title">Películas favoritas</h2>
          <section className='movies-grid'>
            {this.state.favoriteMovies.length === 0 ? (
              <p className="favorites-empty">No hay películas favoritas.</p>
            ) : (
              this.state.favoriteMovies.map(item => this.renderItem(item, 'movie'))
            )}
          </section>

          <h2 className="section-title">Series favoritas</h2>
          <section className='movies-grid'>
            {this.state.favoriteSeries.length === 0 ? (
              <p className="favorites-empty">No hay series favoritas.</p>
            ) : (
              this.state.favoriteSeries.map(item => this.renderItem(item, 'tv'))
            )}
          </section>

          <div className="detail-buttons" style={{ marginTop: '2rem', justifyContent: 'center' }}>
            <button onClick={() => this.refrescar()}>Refrescar</button>
            <button onClick={() => this.borrarTodos()}>Borrar todos</button>
          </div>
        </div>
      </main>
    );
  }
}

export default Favoritos;
