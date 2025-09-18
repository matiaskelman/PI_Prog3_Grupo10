import React, { Component } from 'react'
import {usePararams} from 'react-router-dom'

export class Detalle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detalle: [],
      cargando: true,
      id: props.match.params.id
   
    };
  }
  componentDidMount() {
let id = this.props.match.params.id
    fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({ detalle: data, cargando: false })
        console.log(data)
      })
      .catch(() => this.setState({ detalle: [] }));
  }
  render() {
    const item = this.state.detalle;
    return (
      
    <article className="ficha">
      <h1>{item.title}</h1>
      <h2>{item.vote_average}</h2>
      <h2>{item.release_date}</h2>
      <p>{item.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title} />
      <a href= {`${item.homepage}`} ><h3>Pagina web</h3></a>
      
      </article>
    )
  }
}

export default Detalle