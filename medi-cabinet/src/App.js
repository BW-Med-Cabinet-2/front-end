import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import Cards from './Components/Cards/Cards'; 
import NavBar from './Components/NavBar'; 
import SearchForm from './Components/SearchForm';


import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      {/* Hero Image */}
      <h1 id="helptext">Let's help find what you need</h1>
      <div className="SearchForm">
      <SearchForm />
      {/* <Cards /> */}
      </div>
    </div>
  );
}

export default App;
