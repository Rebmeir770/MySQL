import React from 'react'
import "./login.scss";
import { Link } from 'react-router-dom'


const Login = () => {
  

  function handleLogin(ev:any) {
    ev.preventDefault();
    console.log('login')
    let {username, password } = ev.target.elements;
    username = username.value;
    password = password.value;
    console.log(username, password)


  }


  return (
    <div className='conteiner'>
     <div className='auth'>
        <h1>Login</h1>
        <form onSubmit={handleLogin} >
          <input required type="text" placeholder='username' name="username"  />
          <input required type="password" placeholder='password'  name="password" />
          <button>Longin</button>
        </form>
        <Link className="Register" to="/Register"><button>Don't have account? click to Register</button></Link>
      </div>
    </div>
  )
}

export default Login;