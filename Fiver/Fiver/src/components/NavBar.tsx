import React, { useEffect, useState } from 'react';
import './NavBar.scss';
// import { Link } from 'react-router-dom';



const NavBar = () => {
  
  const [active, setActive] = useState(false);

  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive);
    
    return () => {
      window.removeEventListener("scroll", isActive)
    } 
  },[])

  const currentUser = {
    id:1,
    username:"Meir Duvid Krykun",
    isSeller: true
  }

  return (
    <div className={active ? "navbar active" : "navbar"}>
    
        <div className="container">
            <div className="logo">
              {/* <Link to="/"> */}
                <span className='text'>Fiverr</span>
             {/* </Link>   */}
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
         { active && (       
           <>
              <hr />
              <div className="menu">
                <span>test 1</span>
                <span>test 2</span>
              </div>
           </>
         )}

          
    </div>
  );
};

export default NavBar;