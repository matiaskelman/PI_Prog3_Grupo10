import React, { Component } from 'react'
import Series from '../../Components/Series/series';
export class SeriesView extends Component {
   constructor(props) {
    super(props);
    this.state = {
      series: [],
      cargando: true,
    };
  }
    componentDidMount() {
  
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=f9fed29318027d1571e2d4e385ce272d&language=es-ES&page=1')
      .then(response => response.json())
      .then(data => {
        this.setState({ series: data.results, cargando: false })
        console.log(data)
      })
      .catch(() => this.setState({ series: [] }));
  }
  render() {
    return (
      <div>
        <Series data = {this.state.series}/>
      </div>

    )
  }
}

export default SeriesView;