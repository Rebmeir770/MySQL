import React from "react";
import '../styles/home.scss';
import ModelSongs from "../modelSongs/ModelSongs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../User/userApi";
import { selectUser } from "../User/logoutSlice";

function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutAsync())
    navigate('/login');
  }

  return (
    <>
      <ModelSongs/>
      <div className=" conteiner1">
        <button onClick={logout}>Logout</button> 
     </div>
    </>
  )
}

export default Home;

