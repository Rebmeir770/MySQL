import React from 'react'

const Register = () => {
  
  function handleRegister(ev:any){
    ev.preventDefault();
    console.log('register')
    let {email, password, name} = ev.targe.elements;
    email = email.value;
    password = password.value;
    name = name.value;

    console.log(email, password, name)
  }
  return (
    <div>
       <form onSubmit={handleRegister}>
        <input type="email" name="email" required placeholder='email'/>
        <input type="text" name="name" required placeholder='name'/>
        <input type="password" name="password" required placeholder='password'/>
        <button type='submit'>Register</button>
       </form>
    </div>
  )
}

export default Register