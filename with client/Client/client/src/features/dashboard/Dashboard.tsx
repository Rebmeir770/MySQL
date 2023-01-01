import React, { useEffect } from 'react';
import Auth from '../authentication/Auth';
import { useState } from 'react';
import '../styles/dashboard.scss';
import SpotifyWebApi from "spotify-web-api-node";



const spotifyApi = new SpotifyWebApi({
  clientId: "245995995f1c4a328408b62ec83e8ab7",
})
export interface CodeProps {
  code: string|null
  
}

const Dashboard: React.FC<CodeProps> = ({code}) => {
  const accessToken = (code)
  const [seach, setsearch] = useState<string>("")
  const [searchResults, setSearchResults] = useState([])
  
  useEffect(() =>{
    if (!accessToken)return 
    spotifyApi.setAccessToken(accessToken);
  },[accessToken])

  useEffect(() =>{
    if (!seach) return setSearchResults([]);
  },[seach, accessToken])

  function handleSearch(ev:any) {
    try {
      setsearch(ev.target.value);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(ev:any) {
    ev.preventDefault();
    try {
      let{search} = ev.target.elements;
      search = search.value;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='container2'>
      <form onSubmit={handleSubmit}>
         <input type="search" name='search' placeholder='Seacrh Songs/Artists'onChange={handleSearch}  />
         <button>SEARCH</button>
      </form>
    </div>
  )
}

export default Dashboard








