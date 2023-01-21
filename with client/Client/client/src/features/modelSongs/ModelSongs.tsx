import {useState, useEffect} from 'react';
import Player from '../player/Player';

const ModelSongs = () => {
    const [songs] = useState([
        {
          title: "Ohtotoh",
          artist: "Avrham Fried",
          img_src: "./images/avrham_fried.jpg",
          src: "./music/avraham_fried_ohtotoh.mp3"
        },
        {
          title: "Ba'eilim HaShem",
          artist: "Nachas",
          img_src: "./images/ba_eilim-hashem-cover.jpg",
          src: "./music/ba_eilim_hashem.mp3"
        },
        {
          title: "Boiee besholom",
          artist: "Mordechai ben David",
          img_src: "./images/boiee_MBD.jpg",
          src: "./music/boiee_besholom.mp3"
        },
        {
            title: "Ribon",
            artist: "Boruch Sholom Blesofsky",
            img_src: "./images/Ribon.jpg",
            src: "./music/ribon_1.mp3"
        },
        {
            title: "Veachrey hakol",
            artist: "Chaim Israel",
            img_src: "./images/JaimIs-veachrey-hakol.jpg",
            src: "./music/veachrey_hakol.mp3"
        },
        {
            title: "Hashatu Huchu",
            artist: "Mordechai ben David",
            img_src: "./images/hashatu-huchu.jpg",
            src: "./music/hashatu_huchu.mp3"
        },
        {
            title: "Rabbi Shimon",
            artist: "Mordechai ben David",
            img_src: "./images/rabbi_shimon_mbd.jpg",
            src: "./music/rabbi_shimon_mbd.mp3"
        },
        {
            title: "Aleh katan",
            artist: "Shalom Goldstein",
            img_src: "./images/alehkatan.jpg",
            src: "./music/alehkatan.mp3"
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
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
    />
    </div>
  )
}

export default ModelSongs