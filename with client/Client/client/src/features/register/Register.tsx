import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerAsync } from '../User/userApi';
import '../styles/register.scss'
import { selectUser } from '../User/userSlice';


const Register = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<any>('');

  const emailValidationRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  console.log(user);

  function handleRegister(ev:any){
    ev.preventDefault();
    console.log('register')
    let {email, password, name} = ev.target.elements;
    email = email.value;
    password = password.value;
    name = name.value;

    if (!email.trim()) {
      setErrorMessage('invalid email');
      return;
    } 
    if (!name.trim()) {
      setErrorMessage('invalid name - empty');
      return;
    } 
    if (!password.trim()) {
      setErrorMessage('invalid password - empty');
      return;
    } 
    
      console.log(email, password, name);
      dispatch(registerAsync({email, password, name}))
      navigate('/login');
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
       <form onSubmit={handleRegister}>
        <input  type="email" name="email" required placeholder='email'/>
        <input  type="text" name="name" required placeholder='name'/>
        <input  type="password" name="password" required placeholder='password'/>
        <div style={{ color: 'red' }}>{errorMessage}</div>
        <button type='submit'>Register</button>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
       </form>
       
    </div>
  )
}

export default Register