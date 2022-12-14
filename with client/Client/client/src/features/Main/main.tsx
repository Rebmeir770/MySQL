import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Ready from "../ready/Ready";


function Main() {

  
  return (
    
    <div>
      <Nav />
      <Outlet />
      <Ready />
    </div>
  );
}

export default Main;