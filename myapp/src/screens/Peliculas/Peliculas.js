import React, { Component } from 'react'
import Movies from '../../Components/Movies/movies';
export class Peliculas extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data: [],
      cargando: true,
    };
  }
    componentDidMount() {
  
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.results, cargando: false })
        console.log(data)
      })
      .catch(() => this.setState({ data: [] }));
  }
  render() {
    return (
      <div>
                <Movies
              titulo="Popular movies this week"
              videos={this.state.data}
              toAll="/movies?mode=popular"
            />
      </div>

    )
  }
}

export default Peliculas;