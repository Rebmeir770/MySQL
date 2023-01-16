import express from "express";
import mysql from "mysql";
import SpotifyWebApi from 'spotify-web-api-node';
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port: number = 4000;

app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req,res) => {
  const refreshToken = req.body.refreshToken
  
  const spotifyApi = new SpotifyWebApi({
   
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi.refreshAccessToken().then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn
      })  
    }).catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })  
})
  
app.post('/ready', (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
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

import tokenRoute from './API/users/torken/tokenRoute'
app.use('api/token', tokenRoute)


app.use('*',express.static("./client/build"));

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});