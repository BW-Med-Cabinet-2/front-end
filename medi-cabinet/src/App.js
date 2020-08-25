import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import Cards from './components/Cards/Cards'
import RegisterForm from './Components/Register/RegisterForm.js';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar'; 


import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        {/* <SearchBar /> */}
        <Cards />
      </header>
    </div>
  );
}

export default App;
