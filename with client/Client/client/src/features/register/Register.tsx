import React from 'react'

const Register = () => {
  function handleRegister(ev:any){
    ev.preventdefault();
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
        <input type="email" name="email" placeholder='email'/>
        <input type="text" name="name" placeholder='name'/>
        <input type="password" name="password" placeholder='password'/>
        <button type='submit'>Register</button>
       </form>
    </div>
  )
}

export default Register