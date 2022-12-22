import express from "express";
import mysql from "mysql";
import SpotifyWebApi from 'spotify-web-api-node';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port: number = 3000;

app.use(cors())
app.use(bodyParser.json())

app.post('/ready', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri : 'https://localhost:3000',
    clientId: '245995995f1c4a328408b62ec83e8ab7',
    clientSecret: '223155f529cb4c70b2601614f052d019'
  })

  spotifyApi.authorizationCodeGrant(code).then(data =>{
    res.json({
      accessToken: data.body.accces_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  }) 
   .catch(() => {
    res.sendStatus(400)
   })
})

app.use(express.static("./client/build"));
app.use(express.json());

export const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "meirMeiital080821",
  database: "register",
});

connection.connect((err) => {
  try {
      if (err) throw err;

      console.info("🔥 MySQL is connected 🛢 🔥");
  } catch (error) {
      console.error(error);
  }
});

 
import usersRoute from './API/users/usersRoute'
app.use('/api/users', usersRoute);


app.use('*',express.static("./client/build"));

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});