import React from 'react';
import { Link } from 'react-router-dom';
import Serie from '../Serie/serie';


function Series({ titulo, series, toAll }) {
  return (
    <section className="sectionSeries">
      <div className="divSeries">
        <h2 className="Titulo">{titulo}</h2>
        {toAll === false ? null : (
          <Link to={toAll} className="section__see-all">See all</Link>
        )}
      </div>

      <div className="grid">
        {series != null && series.length > 0
          ? series.map((item) => <Serie key={item.id} data={item} />)
          : <p className="empty">No hay resultados.</p>}
      </div>
    </section>
  );
}

export default Series;
