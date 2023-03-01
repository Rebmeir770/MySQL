import React, { useEffect, useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const [active, setActive] = useState<boolean>(false);

const NavBar = () => {
  
  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive);
    
    return () => {
      window.removeEventListener("scroll", isActive);
    } 
  },[])

  return (
    // <div className={active ? "navabar active" : "navbar"}>
    <div className= 'navbar'>
        <div className="container">
            <div className="logo">
              <Link to="/">
                <span className='text'>Fiverr</span>
             </Link>  
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sing in</span>
                <span>Become a Seller</span>
                <button>Join</button>
            </div>
            
        </div>
         {/* {(active) && ( 
            <>
              <hr />
              <div className="menu">
                <span>mierda</span>
                <span>mierda</span>
              </div>
           </>
         )} */}

           <>
              <hr />
              <div className="menu">
                <span>Test</span>
                <span>Test2</span>
              </div>
           </>
    </div>
  );
};

export default NavBar;