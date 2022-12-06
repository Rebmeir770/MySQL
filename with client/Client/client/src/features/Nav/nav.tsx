import { Link } from "react-router-dom";
import React from 'react'


export const nav = () => {
  return (
    <div className="nav">
      {/* <Link to="/">
        <div className="link">Home</div>
      </Link>
       */}

       <div className="conteiner">
          <div className="logo"></div>
          <div className="links"></div>
       </div>
      
    
    </div>
  );
};

export default nav;

