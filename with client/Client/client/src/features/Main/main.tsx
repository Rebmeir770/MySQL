import { Outlet } from "react-router-dom";
import nav from "../Nav/nav"; 
//components

function Main() {
  return (
    <div>
      
      <Outlet />
      <nav />
    </div>
  );
}

export default Main;