import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerAsync } from '../User/userApi';
import '../styles/register.scss'
import { selectUser } from '../User/userSlice';

const Register = () => {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser)

  console.log(user)

  function handleRegister(ev:any){
    ev.preventDefault();
    console.log('register')
    let {email, password, name} = ev.target.elements;
    email = email.value;
    password = password.value;
    name = name.value;

    console.log(email, password, name);

    dispatch(registerAsync({email, password, name}))
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
       <form onSubmit={handleRegister}>
        <input  type="email" name="email" required placeholder='email'/>
        <input  type="text" name="name" required placeholder='name'/>
        <input  type="password" name="password" required placeholder='password'/>
        <button type='submit'>Register</button>
       </form>
    </div>
  )
}

export default Register