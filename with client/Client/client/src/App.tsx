import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Register from './features/register/Register';
import Login from './features/login/Login';
import Main from './features/Main/main';
import Home from './features/Home/home';
import Nav from "./components/nav/Nav";
import Ready from "./features/ready/Ready";
import Dashboard from "./features/dashboard/Dashboard";
import JewishDate from "./features/jewishDate/JewishDate";

const App = () => {
 const [codeKey, setCodeKey] = useState<string|null>(null)
  useEffect(()=>{
    const codeKeyStart = new URLSearchParams(window.location.search).get('code');
    console.log(codeKeyStart)
    setCodeKey(codeKeyStart);
  },[])

  return(
    
    <BrowserRouter>
      <JewishDate/>
      <Nav/> 
      {codeKey? <Dashboard code={codeKey} />:<Ready/>}
        <Routes>
           <Route path="/" element={<Main />} >

               <Route index element={<Home />} />
               <Route path="login"index element={<Login/>} />
               <Route path="Register" element={<Register/>} />

          </Route>
          
        </Routes>
    </BrowserRouter>


  );
};

export default App
