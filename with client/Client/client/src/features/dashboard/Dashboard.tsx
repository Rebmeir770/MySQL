import React, { useEffect,useState   } from 'react';
import Auth from '../authentication/Auth';
import '../styles/dashboard.scss';
import SpotifyWebApi from "spotify-web-api-node";
import { resourceLimits } from 'worker_threads';



const spotifyApi = new SpotifyWebApi({
  clientId: "245995995f1c4a328408b62ec83e8ab7",
})
export interface CodeProps {
  code: string|null
  
}

const Dashboard: React.FC<CodeProps> = ({code}) => {
  const accessToken = (code)
  const [seach, setsearch] = useState<string>("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  
  useEffect(() =>{
    if (!accessToken)return 
    spotifyApi.setAccessToken(accessToken);
  },[accessToken])

  useEffect(() =>{
    if (!seach) return setSearchResults([]);
    if(!accessToken) return
    
    spotifyApi.searchTracks(seach).then(res => {
      // @ts-ignore
      res.body.tracks.items.map(track =>{
        const smallestAlbumImage = track.album.images.reduce(
           (smallest, image) =>{
            // @ts-ignore
          if (image.height < smallest.height) return image
          return smallest
        }, track.album.images[0])
        return{
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          // @ts-ignore
          albumUrl: smallestAlbumImage.uri
        }
      })
    })
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








