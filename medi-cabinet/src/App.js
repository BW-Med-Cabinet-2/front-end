import React from 'react';
import RegisterForm from './Components/Register/RegisterForm.js';
import {Switch, Route, NavLink} from 'react-router-dom';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = '/register'>
          <RegisterForm />
        </Route>
        <Route path = '/login'>
          <Login />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
