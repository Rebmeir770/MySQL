import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/nav";



function Main() {

  
  return (
    
    <div>
      <Nav />
      <Outlet />
      
    </div>
  );
}

export default Main;