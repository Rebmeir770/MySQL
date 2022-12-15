import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";



function Main() {

  
  return (
    
    <div>
      <Nav />
      <Outlet />
      
    </div>
  );
}

export default Main;