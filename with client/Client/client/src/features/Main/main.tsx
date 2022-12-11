import { Outlet } from "react-router-dom";
import nav from "../../components/Nav/nav";


function Main() {

  
  return (
    
    <div>
      <nav />
      <Outlet />
      
    </div>
  );
}

export default Main;