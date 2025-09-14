import React, { Component } from 'react'

 class Resultados extends Component {
  render() {
    return (
      <div>
        <h1> Lo que busco el usuario fue: {this.params.busqueda}</h1>
      </div>
    )
  }
}

export default Resultados