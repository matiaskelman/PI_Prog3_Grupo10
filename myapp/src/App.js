import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route } from "react-router-dom"
import Header from './Components/Header/Header.js';
import Home from './screens/home/Home.js';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
      </Switch>
    </React.Fragment>

  );
}

export default App;
