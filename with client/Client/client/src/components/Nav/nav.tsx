import { Link } from "react-router-dom";
import React from 'react'
import '../styles/nav.scss'


export const Nav = () => {
  return (
    <div className="nav">
      <Link to='/'>
        <div className="link">Home</div>
      </Link>
      
      <Link to='/login'>
        <div className="link">Login</div>
      </Link>
      <Link to='/register'>
        <div className="link">Register</div>
      </Link> 
    
    </div>
  );
};

export default Nav;

