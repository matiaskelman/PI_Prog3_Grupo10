import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/movie';
import "./style.css"

function Movies({ titulo, videos, toAll }) {
  return (
    <section className="sectionMovies">
      <div className="divMovies">
        <h2 className="Titulo">{titulo}</h2>
        {(toAll !== "")  ? (
          <Link to={toAll} className="section__see-all">See all</Link>
        ) : null }
      </div>

      <div className="grid">
        {videos != null && videos.length > 0
          ? videos.map((item) => <Movie key={item.id} data={item} />)
          : <p className="empty">No hay resultados.</p>}
      </div>
    </section>
  );
}

export default Movies;
