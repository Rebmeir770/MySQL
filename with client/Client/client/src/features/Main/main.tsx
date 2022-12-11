import { Outlet } from "react-router-dom";
import '../Nav/nav'
import '../styles/main.scss'

function Main() {

  
  return (
    
    <div>
      <div className='logo'>
        <h1>s</h1>
        
      </div>
      <Outlet />
      <nav />
      
    </div>
  );
}

export default Main;