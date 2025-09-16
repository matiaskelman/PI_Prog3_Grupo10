import React from 'react'
import { Component } from 'react'
import Movies from '../Movies/Movies'

class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
            
        }
    }
    
//API CALL
    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDUwYjY4YjIxYWRmM2NjYzRiMTI4ZGY5ODA5MDhkNSIsIm5iZiI6MTc1NzkzNDc1MS45ODIsInN1YiI6IjY4YzdmNDlmZjM1YmViOWE3YWNhNzgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.flHHnsGeBRhXnQg4eyDfn6si4Ao2T-nnwa5q-T674rw'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ data: data.results },() => console.log(this.state.data))
            })
            .catch(err => console.error(err));
            console.log(this.state.data)
    }
//FIN API CALL

    render() {

        return (
            <div className="container">
                <h1>UdeSA Movies</h1>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                <Movies data={this.state.data}/>
                  </div>
        )
    }
}

export default Index;

