import React, { useEffect, useState } from 'react';
import SongsCard from './SongsCard';
import { GetSongs, Music } from './GetSongs';
// import './breeds.scss';

const IndexSongs = () => {
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

export default IndexSongs;