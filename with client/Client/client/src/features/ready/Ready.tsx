import '../styles/ready.scss';
import React from 'react';

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=245995995f1c4a328408b62ec83e8ab7&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

console.log(AUTH_URL);

function Ready() {
  return (
    <div className='container'>
      <button>
        <a href={AUTH_URL}>
           
        <img src="https://dcassetcdn.com/design_img/1520978/501634/501634_7707192_1520978_568d7453_image.png" alt="logo" />
            
        </a>
      </button> 
    </div>
  )
}

export default Ready