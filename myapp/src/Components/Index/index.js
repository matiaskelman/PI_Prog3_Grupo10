import React from 'react'
import { Component } from 'react'
import Movies from '../Movies/Movies'
import Buscador from '../Buscador/Buscador';


class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masVistas: [],
      mejorValoradas: [],
      cargandoMasVistas: true,
      cargandoMejores: true
    };
  }

  componentDidMount() {
  
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1')
      .then(response => response.json())
      .then(data => {
        this.setState({ masVistas: data.results, cargandoMasVistas: false })
        console.log(data)
      })
      .catch(() => this.setState({ masVistas: [] }));

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1')
      .then(response => response.json())
      .then(data => this.setState({ mejorValoradas: data.results, cargandoMejores: false }))
      .catch(() => this.setState({ mejorValoradas: [] }));
  }

  render() {
    return (
      <main className="container">
        
        <h1>UdeSA Movies</h1>
        <Buscador></Buscador>
        {
          this.state.cargandoMasVistas ? <h1>Cargando...</h1> :
            <Movies
              titulo="Popular movies this week"
              videos={this.state.masVistas.slice(0, 4)}
              toAll="/Peliculas?mode=popular"
            />

        }

        {
          this.state.cargandoMejores ? <h1>Cargando...</h1> :
            <Movies
              titulo="Top rated movies"
              videos={this.state.mejorValoradas.slice(0, 4)}
              toAll="/Peliculas?mode=top_rated" />
        }


      </main>
    );
  }
}

export default Index;

