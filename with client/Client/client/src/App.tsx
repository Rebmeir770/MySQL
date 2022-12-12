import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Register from './features/Register/register';
import Login from './features/Login/login';
import Main from './features/Main/main';
import Home from './features/Home/home';
import Nav from "./components/nav/Nav";
import Ready from "./features/ready/Ready";




const App = () => {
  return(
    <BrowserRouter>
    <Ready/>
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
