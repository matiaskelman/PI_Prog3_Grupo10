import React from 'react'
import { Component } from 'react'

class Buscador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: ''
        }
    }

    controlarInput(event) {
       this.setState(
    {
        busqueda: event.target.value
    },
    () => console.log(this.state.busqueda)
);
    }

    controlarForm(event) {
        event.preventDefault()
        console.log("El usuario quiere buscar: " + this.state.busqueda)
    }

    render() {
        return (
            <div>
                <form className="search-form" onSubmit={(evento) => this.controlarForm(evento)} method="get">
                    <input type="text" className="" name="searchData" placeholder="Buscar..." onChange={(evento) => this.controlarInput(evento)}/>
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                </form>
            </div>
        )
    }
}
export default Buscador;