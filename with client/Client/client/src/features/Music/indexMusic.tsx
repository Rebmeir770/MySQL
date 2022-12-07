import axios from "axios";


export interface Image {
  song: string;
  src:string
}

export async function getSongs(): Promise<Image[]> {
  try {
    const {data} = await axios.get('https://theaudiodb.p.rapidapi.com/searchalbum.php');
        
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


export async function seachAlbum(song: string):Promise<Image> {
    try {
      const { data } = await axios.get(
        `https://theaudiodb.p.rapidapi.com/${seachAlbum}searchalbum.php` 
        
      );
      if(!data) throw new Error (`No data on image of song ${seachAlbum}`);
      const { message } = data;
      if(!message) throw new Error (`No data on image of song ${seachAlbum} - 2`);
      return {song, src:message};
    } catch (error) {
        console.error(error)
        return {song, src:''};
    }
}
    
