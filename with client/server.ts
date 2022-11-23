import express from "express";
import mysql from "mysql";

const app = express();
const port: number = 3000;

app.use(express.static("./client/build"));
app.use(express.json());
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "meirMeiital080821",
  database: "movie",
});

connection.connect((err) => {
  try {
      if (err) throw err;

      console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
      console.error(error);
  }
});





app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});