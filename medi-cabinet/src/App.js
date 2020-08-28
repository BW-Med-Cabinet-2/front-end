import React, { useState, useEffect } from 'react';
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

  let initialSavedStrains = []; 
  if (window.localStorage.getItem('Saved Strains')){
    initialSavedStrains = [window.localStorage.getItem('Saved Strains')]
  }
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = strain => {
    setSavedList([...savedList, strain])
    console.log(savedList); 
  };



  return (
    <div className="App">
      <header>
        <NavBar setQuizResults={setQuizResults} />

        {quizResults && <Cards quizResults={quizResults} addToSavedList={addToSavedList} savedList={savedList} setSavedList={setSavedList}/>}
        {searchResults && <Cards searchResults={searchResults} addToSavedList={addToSavedList} savedList={savedList} setSavedList={setSavedList}/>}

      </header>


      <Route path='/dashboard'><Dashboard  list={savedList} setSavedList={setSavedList}/></Route> 
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
      {window.localStorage.setItem('Saved Strains', JSON.stringify(savedList))}
    </div>
  );
}

export default App;
