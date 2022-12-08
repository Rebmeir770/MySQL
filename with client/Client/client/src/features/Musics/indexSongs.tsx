import React, { useEffect, useState } from 'react';
import SongsCard from './songsCard';
import { GetSongs, Music } from './getSongs';


const Songs = () => {
   //set state songs
   const[songs, setSongs] = useState<Music[]>([]);

  useEffect (() => {
    GetSongs().then((msc: Music[]) => {
        if (msc.length > 0) {
           console.log(msc);
           setSongs(msc);
        }
    }); 
  }, []);

  return (
      <div>
        <h1>Songs</h1>
        {songs.map((song, i) => <SongsCard song={song}/>)}
      </div>
  );  
};

export default Songs;