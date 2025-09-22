import React, { Component } from 'react'
import {usePararams} from 'react-router-dom'

export class Detalle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detalle: [],
      cargandoElementos: true,
      id: props.match.params.id
   
    };
  }
  componentDidMount() {
let id = this.props.match.params.id
if (id[0] === "1"){
id = id.slice(1)
    fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({ detalle: data,cargandoElementos: false })
        console.log(data)
      })
      .catch(() => this.setState({ detalle: [] }));
}
else {
  id = id.slice(1)
    fetch( `https://api.themoviedb.org/3/tv/${id}?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({ detalle: data, cargandoElementos: false })
        console.log(data)
      })
      .catch(() => this.setState({ detalle: [] }));
}

  }
  render() {

let id = this.props.match.params.id
    const item = this.state.detalle;
    
       if (this.state.cargandoElementos) {
    return <h1>Cargando...</h1>;
  }

    if(id[0] === "1"){
 
    return (
      
    <article className="ficha">
      <h1>{item.title}</h1>
      <h2>{item.vote_average}</h2>
      <h2>{item.release_date}</h2>
      <p>{item.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title} className="img" />
      <a href= {`${item.homepage}`} ><h3>Pagina web</h3></a>
      
      </article>
    )
  }else{
    return (
           
    <article className="ficha">
      <h1>{item.name}</h1>
      <h2>{item.vote_average}</h2>
      <h2>{item.release_date}</h2>
      <p>{item.overview}</p>
      <ul>
        <li>Número de temporadas: {item.number_of_seasons}</li>
        <li>Número de episodios: {item.number_of_episodes}</li>
      </ul>
      <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.title} className="img"/>
      <a href= {`${item.homepage}`} ><h3>Pagina web</h3></a>
      
      </article>
    )
  } }
}

export default Detalle