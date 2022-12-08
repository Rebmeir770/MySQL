import axios from "axios";


export interface Music {
  song: string;
  src:string
}

export async function GetSongs(): Promise<Music[]> {
  try {
    const {data} = await axios.get(`https://api.apilayer.com/spotify/album_metadata?id={id}", requestOptions)
      `);
        
    const {message} = data;
    console.log(message);

    const songs = Object.keys(message);  // array of songs
        
    const images = await Promise.all(songs.map(song=>seachAlbum(song)));
    console.log(images);
        
    return images;
  } catch (error) {
    console.error(error)
    return [];
  }
} 

export default GetSongs;


export async function seachAlbum(song: string):Promise<Music> {
    try {
      const { data } = await axios.get
        (`"https://api.apilayer.com/spotify/${seachAlbum}album_metadata?id={id}", requestOptions`)
      
      if(!data) throw new Error (`No data on image of song ${seachAlbum}`);
      const { message } = data;
      if(!message) throw new Error (`No data on image of song ${seachAlbum} - 2`);
      return {song, src:message};
    } catch (error) {
        console.error(error)
        return {song, src:''};
    }
}
    
