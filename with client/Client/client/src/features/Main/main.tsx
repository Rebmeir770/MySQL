import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Register from "../register/Register";
import { selectUser } from "../User/userSlice";

const Main = () =>  {  
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [user]);
  
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default Main;