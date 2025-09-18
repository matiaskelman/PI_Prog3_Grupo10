import React, { Component } from 'react'
import Series from '../../Components/Series/series';


export class SeriesView extends Component {
   constructor(props) {
    super(props);
    this.state = {
      series: [],
      cargando: true,
      pag: 1
    };
    
  }
    componentDidMount() {
  
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1')
      .then(response => response.json())
      .then(data => {
        this.setState(
          { series: data.results || [], 
          cargando: false,
          pag: this.state.pag + 1
        });
        
      })
      .catch(() => this.setState({ series: [],cargando:false }));
  }

    cargarMas() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=${this.state.pag}`)
      .then(response => response.json())
      .then(data => {
      this.setState({
          series: this.state.series.concat(data.results),
          pag: this.state.pag + 1
        });
      })
       .catch((error) => console.log("Error Fetch", error));
    }
  render() {
    return (
      <div>
        <Series data = {this.state.series}/>
        {this.state.cargando ? null : (
          <button onClick={() => this.cargarMas()} className="cargarMas">
            Cargar más
          </button> )}
        
      </div>

    )
  }
}

export default SeriesView;