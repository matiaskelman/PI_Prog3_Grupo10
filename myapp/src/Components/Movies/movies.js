import React, { Component } from 'react'
import Movie from '../Movie/Movie'

export class Movies extends Component {
   
  render() {
    return (
   <React.Fragment>
     <section className="row cards" id="movies">
        {
this.props.data ?
            this.props.data.map((movie) => <Movie key={movie.id} data={movie} />)
:            <p>NO API CALL</p>
        }    
        </section>
    </React.Fragment>
    )
  }
}

export default Movies