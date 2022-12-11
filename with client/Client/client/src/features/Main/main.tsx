import { Outlet } from "react-router-dom";
import '../Nav/nav'


function Main() {

  
  return (
    
    <div>
      
      <Outlet />
      <nav />
      
    </div>
  );
}

export default Main;