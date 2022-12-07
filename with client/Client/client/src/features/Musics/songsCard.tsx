import { FC } from "react"
import { Music } from "./getSongs"
import { Link } from "react-router-dom";

interface SongCardProps{
  song: Music;
}
const SongsCard:FC<SongCardProps> = ({ song }) => {
  return (
    <Link to={`/song/${song.song}`}>
      <div className="card">
          <img src={song.src} alt={`${song.song}`} />
          <p>{song.song}</p>
      </div>
    </Link>
  );
};

export default SongsCard;