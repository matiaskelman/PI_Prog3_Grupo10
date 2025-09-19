import React from 'react';

import { Switch,Route } from "react-router-dom"
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Home from './screens/Home/Home.js';
import Favoritos from './screens/Favoritos/Favoritos.js';
import Peliculas from './screens/Peliculas/Peliculas.js';
import SeriesView from './screens/Series/SeriesView.js';
import PageNotFound from './screens/PageNotFound/PageNotFound.js';
import Resultados from './screens/Resultados/Resultados.js';
import Detalle from './screens/Detalle/Detalle.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/Favoritos' component={Favoritos} exact={true} />
        <Route path='/Peliculas' component={Peliculas} exact={true} />
        <Route path='/Series' component={SeriesView} exact={true} />

        <Route path='/Detalle/:id' component={Detalle} exact={true} />
         <Route path="/resultados/:busqueda/:tipo?" component={Resultados} exact={true} />
        <Route component={PageNotFound}/>
      </Switch>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
