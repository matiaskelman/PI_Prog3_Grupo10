import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './favorites.css';

class Favoritos extends Component {
  constructor(props){
    super(props);
    this.state = {
      favoriteMovies: [],
      favoriteSeries: [],
      cargandoElementos: true
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
      favoriteSeries: series,
      cargandoElementos: false
    });
  }

  removeFavorite = (type, id) => {
    if (type === 'movie') {
      const updated = this.state.favoriteMovies.filter(item => item.id !== id);
      localStorage.setItem('favoritos', JSON.stringify(updated));          
      this.setState({ favoriteMovies: updated });
    } else {
      const updated = this.state.favoriteSeries.filter(item => item.id !== id);
      localStorage.setItem('favoritosSeries', JSON.stringify(updated));    
      this.setState({ favoriteSeries: updated });
    }
  }

  borrarTodos(){
    localStorage.setItem('favoritos', JSON.stringify([]));                
    localStorage.setItem('favoritosSeries', JSON.stringify([]));           
    this.setState({ favoriteMovies: [], favoriteSeries: [] });
  }

  renderItem = (item, type) => {
    return (
      <div key={item.id} className="card-article">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
        <h3>{item.original_title || item.title || item.original_name || item.name}</h3>
        <div>
          <Link to={`/Detalle/${item.id}`}>Ver detalle</Link> {}
          <button onClick={() => this.removeFavorite(type, item.id)}>Eliminar</button>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.cargandoElementos) {
      return <h1 >Cargando...</h1>;
  }
    return (
     

      <main>
        <div className="favorites-container">
          <h1 className="page-title">Mis Favoritos</h1>
          
          <h2 className="section-title">Películas favoritas</h2>
          <section className='grid'>
            {this.state.favoriteMovies.length === 0 ? (
              <p className="favorites-empty">No hay películas favoritas.</p>
            ) : (
              this.state.favoriteMovies.map(item => this.renderItem(item, 'movie'))
            )}
          </section>

          <h2 className="section-title">Series favoritas</h2>
          <section className='grid'>
            {this.state.favoriteSeries.length === 0 ? (
              <p className="favorites-empty">No hay series favoritas.</p>
            ) : (
              this.state.favoriteSeries.map(item => this.renderItem(item, 'series'))
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
