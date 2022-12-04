import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg'
import { Counter } from './features/counter/Counter';
import './App.css';
import Register from './features/Register/register';
import Login from './features/Login/login';
import Main from './features/Main/main';
import Home from './features/Home/home';

// function App() {
//   return (
//     <div>
//       <Login/>
//       <Register/>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return(
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Main />} />
           <Route index element={<Home />} />
           <Route path="Register" element= {<Register/>} />
           <Route path="Login" element={<Login/>} />
        </Routes>
    </BrowserRouter>


  );
};

export default App
