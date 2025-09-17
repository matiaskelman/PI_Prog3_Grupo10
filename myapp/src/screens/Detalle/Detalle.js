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

    fetch( `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=f9fed29318027d1571e2d4e385ce272d&language=en-US`)
      .then(response => response.json())
      .then(data => {
        this.setState({ detalle: data.results, cargando: false })
        console.log(data)
      })
      .catch(() => this.setState({ detalle: [] }));
  }
  render() {
    return (
      <div>{this.detalle}</div>
    )
  }
}

export default Detalle