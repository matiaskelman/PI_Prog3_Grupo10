import React, { Component } from 'react';
import Movies from "../../Components/Movies/movies"
import Series from '../../Components/Series/series';

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {

            cargandoElementos: true,
            elementos: []
        };
    }

    componentDidMount() {
        console.log(this.props)
        const url = `https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?api_key=f9fed29318027d1571e2d4e385ce272d&query=${this.props.match.params.busqueda}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ elementos: data.results, cargandoElementos: false })
                console.log(data)
            })

    }
    render() {
        return (
            <main className="container">
                <h1>UdeSA Movies</h1>
                {this.props.match.params.tipo === "movie" ? <><h2>Resultados de peliculas para "{this.props.match.params.busqueda}"</h2> 
                          
                  {  this.state.cargandoElementos ? <h1>Cargando...</h1> :
                        <Movies
                            titulo="Resultados de busqueda"
                            videos={this.state.elementos}
                            toAll={""}
                        /> }
                        </>

                          :
                        <><h2>Resultados de series para "{this.props.match.params.busqueda}"</h2> 
                          
                  {  this.state.cargandoElementos ? <h1>Cargando...</h1> :
                        <Series data={this.state.elementos} 
                        /> }
                        </>}
      

            </main>


        )
    }


}
export default Resultados