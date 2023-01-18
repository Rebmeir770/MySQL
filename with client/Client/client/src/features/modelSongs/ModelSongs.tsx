import path from 'path';
import React from 'react'
import {useState, useEffect} from 'react';
import Player from '../player/Player';


const ModelSongs = () => {
    const [songs] = useState([
        {
          title: "ohtotoh",
          artist: "Avrham Fried",
          img_src: "./images/avrham_fried.jpg",
          src: "./music/avrham_fried_ohtotoh.mp3"
        },
        {
          title: "Song 2",
          artist: "Nachas",
          img_src: "./images/ba_elim-hashem-cover.jpg",
          src: "./music/ba_eilim_hashem.mp3"
        },
        {
          title: "Song 3",
          artist: "Mordechai ben David",
          img_src: "./images/boiee_MBD.jpg",
          src: "./music/boiee_beshalom.mp3"
        },
        {
            title: "Song 4",
            artist: "Boruch Sholom Blesofsky",
            img_src: "./images/Ribon.jpg",
            src: "./music/ribon_1.mp3"
        },
        {
            title: "Song 5",
            artist: "Boruch Sholom Blesofsky",
            img_src: "./images/Ribon.jpg",
            src: "./music/ribon_1.mp3"
        },
        {
            title: "Song 6",
            artist: "Mordechai ben David",
            img_src: "./images/hashatu-huchu.jpg",
            src: "./music/hashatu-huchu.mp3"
        },
        {
            title: "Song 7",
            artist: "Mordechai ben David",
            img_src: "./images/rabbi_shimon_mbd.jpg",
            src: "./music/rabbi_shimon_mbd.mp3"
        },
        {
            title: "Song 8",
            artist: "Shalom Goldstein",
            img_src: "./images/alehkatan.jpg",
            src: "./music/alekatan.mp3"
        }
       
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  
    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex]);
    

  return (
    <div>
<Player 
        song={songs[currentSongIndex]}
        netxtSong={songs[nextSongIndex]}
      />
    </div>
  )
}

export default ModelSongs