import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import Cards from './Components/Cards/Cards'; 
import NavBar from './Components/NavBar'; 
import SearchForm from './Components/SearchForm';
import Dashboard from './Components/UserProfile/Dashboard'; 


import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="homepage">
        <div className="hometext">
          <h1 >Let's help find what you need 🌿</h1>
          <p id="helptext">Fill out the form below and click SEARCH to see a list of recommended strains</p>
        </div>
        <div className="SearchForm">
          <SearchForm />
        </div>
      </div>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
