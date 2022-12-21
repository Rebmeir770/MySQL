import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Register from './features/Register/register';
import Login from './features/Login/login';
import Main from './features/Main/main';
import Home from './features/Home/home';
import Nav from "./components/nav/Nav";
import Ready from "./features/ready/Ready";
import Dashboard from "./features/dashboard/Dashboard";
import JewishDate from "./features/jewishDate/JewishDate";
import { CodeProps } from "./features/dashboard/Dashboard";


const code = new URLSearchParams(window.location.search).get('code')
console.log(code)



// const App: React.FC<CodeProps> = (code:any) => {
 
const App = () => {  

  return(
    
    <BrowserRouter>
      <JewishDate/>
      <Nav/> 
      <Ready/>
      {code?<Dashboard code={code} />:
      <Ready/>}
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
