let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "meirMeiital080821"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connceted!")
});
