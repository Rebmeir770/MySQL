import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from './features/Register/register';
import Login from './features/Login/login';
import Main from './features/Main/main';
import Home from './features/Home/home';
import Songs from './features/Musics/indexSongs';
import Musics from './features/Music/indexMusic';
import './styles.scss';


const App = () => {
  return(
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Main />} >
               <Route index element={<Home />} />
               <Route path="Login"index element={<Login/>} />
               <Route path="Register" element={<Register/>} />
          </Route>
           
        </Routes>
    </BrowserRouter>


  );
};

export default App
