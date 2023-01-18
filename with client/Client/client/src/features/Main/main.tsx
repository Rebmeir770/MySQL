import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";

function Main() {

  
  return (
    
    <div>
      
      <Outlet/>
      <Nav/>
    </div>
  );
}

export default Main;