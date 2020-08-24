import React from 'react';
import RegisterForm from './components/Register/RegisterForm';
import NavBar from './components/NavBar'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <RegisterForm />
      </header>
    </div>
  );
}

export default App;
