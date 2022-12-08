import axios from "axios";


export interface Music {
  song: string;
  src:string
}

export async function GetSongs(): Promise<Music[]> {
  try {
    const {data} = await axios.get('https://musicbrainz.org/ws/2/artist/66c662b6-6e2f-4930-8610-912e24c63ed1?fmt=json');
        
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
      const { data } = await axios.get(
        `https://musicbrainz.org/ws/2/${seachAlbum}artist/66c662b6-6e2f-4930-8610-912e24c63ed1?fmt=json`
         
        
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
    
