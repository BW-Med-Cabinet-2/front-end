import React, {useState} from 'react';
import Quiz from './Components/Quiz/Quiz';
import {Switch, Route, NavLink} from 'react-router-dom';

import Cards from './Components/Cards/Cards'; 
import NavBar from './Components/NavBar'; 
import SearchForm from './Components/SearchForm';
import Dashboard from './Components/UserProfile/Dashboard'; 


import './App.css';


function App() {
  let [quizResults, setQuizResults] = useState()

  return (
    <div className="App">
      <header>
        <NavBar />
        <Quiz setQuizResults={setQuizResults}/>
        {quizResults && <Cards quizResults={quizResults}/>}
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
