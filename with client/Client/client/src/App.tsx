import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Register from './features/register/Register';
import Login from './features/login/Login';
import Main from './features/Main/main';
import Home from './features/home/Home';
import Nav from "./components/nav/Nav";
import Ready from "./features/ready/Ready";
import Dashboard from "./features/dashboard/Dashboard";
import JewishDate from "./features/jewishDate/JewishDate";


const App = () => {
 

  return(
    
    <BrowserRouter>
      <JewishDate/>
      <Nav/> 
      
      
      
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
