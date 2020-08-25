import React from 'react';
import NavBar from './components/NavBar'; 
import Cards from './components/Cards/Cards';
import Quiz from './components/Quiz/Quiz';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        {/* <SearchBar /> */}
        <Cards />
        <Quiz />
      </header>
    </div>
  );
}

export default App;
