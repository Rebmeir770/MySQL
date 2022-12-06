import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from './features/Register/register';
import Login from './features/Login/login';
import Main from './features/Main/main';
import Home from './features/Home/home';
import './styles.scss';

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
           <Route path="Login"index element={<Login/>} />
           <Route path="Register" element={<Register/>} />
           <Route path="Home" element={<Home/>} />
           
        </Routes>
    </BrowserRouter>


  );
};

export default App
