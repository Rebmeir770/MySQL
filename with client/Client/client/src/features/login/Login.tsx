import React from 'react'
import '../styles/login.scss'
import { useNavigate, Link } from "react-router-dom";
import { loginAsync } from '../User/userApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser } from '../User/loginSlice';

const Login = () => {
  
  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();


  function handleLogin(ev:any) {
    ev.preventDefault();
    console.log('login')
    let {username, password } = ev.target.elements;
    username = username.value;
    password = password.value;

    console.log(username, password)

    dispatch(loginAsync({username, password}))
    navigate('/home');
  }


  return (
     <div className='auth'>
        <h1>Login</h1>
        <form onSubmit={handleLogin} >
          <input required type="text" placeholder='username' name="username"  />
          <input required type="password" placeholder='password'  name="password" />
          <button>Login</button>
          <span>
          Don't you have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
  )
}

export default Login;