import React, { useEffect,useState   } from 'react';
import Auth from '../authentication/Auth';
import { AUTH_URL } from '../ready/Ready';
import '../styles/dashboard.scss';
import SpotifyWebApi from "spotify-web-api-node";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getToken, selectToken } from '../authentication/authSlice';
import { tokenAsync } from '../authentication/authApi';

export interface CodeProps {
  code: string|null
  
}

const spotifyApi = new SpotifyWebApi({
  // clientId: "245995995f1c4a328408b62ec83e8ab7",
   clientId: "19cd85358d9944ea862bb837eb08562a"
     
	  // clientId: "d1675b274b724855b510dcbdeded2cdf",

})


const Dashboard: React.FC<CodeProps> = ({code}) => {
  //get the token from redux via selector  
  const dispatch = useAppDispatch();
  const token:any = useAppSelector(selectToken)
  console.log(token)

  const accessToken:any = (code)
  const [seach, setsearch] = useState<string>("")
  const [searchResults, setSearchResults] = useState<any>([])
  console.log(searchResults);
  
  useEffect(() =>{
    
    try {
      if(!accessToken) return spotifyApi.setAccessToken(accessToken);
      dispatch(getToken(token))
    } catch (error) {
      console.error(error)
    }
  },[accessToken])

  useEffect(() => {
    if (!seach) return setSearchResults([]);
    console.log(!seach)
    if(!accessToken) return
  console.log(!accessToken)
    spotifyApi.searchTracks(seach).then(res => {
     
      try {
        setSearchResults(res.body.tracks?.items.map(track => {
          console.log(res.body.tracks?.items);
          const smallestAlbumImage = track.album.images.reduce((smallest:any, image:any) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, track.album.images [0])
          return {
            artist: track.album.artists[0],
            title: track.album.name,
            uri: track.album.uri,
            albumUrl: smallestAlbumImage.url
          }
        }))
      } catch (error) {
        console.log(error);
      } 
      
    })
    dispatch(tokenAsync({token}))
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
         <div className="Songs">Songs</div>
      </form>
    </div>
  )
}

// function tokenKey() {
//   const [users, setUsers] = useState([])
//   console.log(users)
//   useEffect(() => {
//       (async () => {
//         try {
//           const response = await fetch("AUTH_URL")
//           const resulte = await response.json();
//           setUsers(resulte);
//         } catch (error) {
//           console.log(error);
//         }
//       })()
//   },[])
// }

export default Dashboard











