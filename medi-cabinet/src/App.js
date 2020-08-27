import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './Components/utils/PrivateRoute';
import Dashboard from './Components/UserProfile/Dashboard';
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

      <Route path='/dashboard' component={Dashboard} />
      <Route path='/viewall' component={Cards} />

      <div className="homepage">
        <div className="hometext">
          <h1>🌿 Let's help find what you need 🌿</h1>
          <p id="helptext">Fill out what you can in the form below and click SEARCH to see a list of recommended strains</p>
        </div>
        <div className="SearchForm">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default App;
