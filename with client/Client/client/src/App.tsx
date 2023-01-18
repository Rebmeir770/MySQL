import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
// import your route components too
import Register from './features/register/Register';
import Login from './features/login/Login';
import Main from './features/Main/main';
import Home from "./features/home/Home";
import JewishDate from "./features/jewishDate/JewishDate";



const App = () => {

  
  return(<>
    
    <BrowserRouter>
    <JewishDate/>
        <Routes>
           <Route path="/" element={<Main />}>
               <Route path="home" index element={<Home />} />
               <Route path="login"index element={<Login/>} />
               <Route path="Register" element={<Register/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App
