import React, { Component } from 'react'
import Movies from '../../Components/Movies/movies';
export class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cargandoElementos: true,
      pag: 1
    };

  }
  componentDidMount() {

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results,
          cargandoElementos: false,
          pag: this.state.pag + 1
        })
      })
      .catch(() => this.setState({ data: [], cargandoElementos: false }));
  }
cargarMas() {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=${this.state.pag}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: this.state.data.concat(data.results),
        pag: this.state.pag + 1
      });
    })
    .catch(() => {});
}

  



  render() {
  return (
    <div>
      {  this.state.cargandoElementos ? <h1>Cargando...</h1>   : (
            <>
              <Movies
                titulo="Popular movies this week" videos={this.state.data} toAll="/movies?mode=popular" />
              <button onClick={() => this.cargarMas()}>Cargar más</button>
            </>
          )
      }
    </div>
  )
}
}

export default Peliculas;