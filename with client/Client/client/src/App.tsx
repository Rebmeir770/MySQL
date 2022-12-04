import React from 'react';
import logo from './logo.svg'
import { Counter } from './features/counter/Counter';
import './App.css';
import Register from './features/Register/register';
import Login from './features/Login/login';

function App() {
  return (
    <div>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
