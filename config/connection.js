// Set up MySQL connection.
const mysql = require("mysql");

const connection;
if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //local host
    connection = mysql.createConnection({
        root: 3306,
        host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "y98qhc3qjl80d0kb",
        password: "bchk7ahcng5roi57",
        database: "hlkxxdv0jwz3kse7"
    });
};
console.log("connected as to HerokuDB");

module.exports = connection;