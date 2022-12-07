import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { seachAlbum, Music } from "../Musics/GetSongs"


const IndexMusic = () => {
  const {song} = useParams();
  const[soundMusic, setSoundMusic] = useState<Music>({song: "", src: "" });

  useEffect(() => {
    if(song)
      seachAlbum(song).then((soundMusic) =>
        setSoundMusic(soundMusic)
      );
  }, [song]);
  return (
    <div> 
      <h1>Song: {song}</h1>
      <img src={soundMusic.src} alt={soundMusic.song} />
  </div>
  ); 
};

export default IndexMusic;