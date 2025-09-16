import React, { Component } from 'react'

export class Movie extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.data);
    }
    
  render() {
    return (
      <React.Fragment>
        <h2 className="alert alert-primary">{this.props.data.title}</h2>
        <section className="row">
            <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500/${this.props.data.backdrop_path}`} alt=""/>
            <section className="col-md-6 info">
                <h3>Descripción</h3>
                <p className="description">{this.props.data.overview}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.props.data.release_date}</p>
                <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.props.data.duration}</p>
                <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.props.data.vote_average}</p>
            </section>
        </section>
        </React.Fragment>
    )
  }
}

export default Movie