import React, { useState } from 'react';
import Quiz from './Components/Quiz/Quiz';
import { Switch, Route, NavLink } from 'react-router-dom';

import PrivateRoute from './Components/utils/PrivateRoute';
import Dashboard from './Components/UserProfile/Dashboard';
import Cards from './Components/Cards/Cards';
import NavBar from './Components/NavBar';
import SearchForm from './Components/SearchForm';

import './App.css';


function App() {
  let [quizResults, setQuizResults] = useState()
  let [searchResults, setSearchResults] = useState()

  return (
    <div className="App">
      <header>
        <NavBar setQuizResults={setQuizResults} />

        {quizResults && <Cards quizResults={quizResults} />}
        {searchResults && <Cards searchResults={searchResults} />}

      </header>


      <Route path='/dashboard' component={Dashboard} />
      <Route path='/results' render={(quizResults, searchResults) => (
        <>
          <Cards {...quizResults} />
          <Cards {...searchResults} />
        </>
      )}
      />
      {/* <Route path='/viewall' render={<Cards />}/>  */}


      <div className="homepage">
        <div className="hometext">
          <h1>🌿 Let's help find what you need 🌿</h1>
          <p id="helptext">Fill out what you can in the form below and click SEARCH to see a list of recommended strains</p>
        </div>
        <div className="SearchForm">
          <SearchForm setSearchResults={setSearchResults} />
        </div>
      </div>
    </div>
  );
}

export default App;
