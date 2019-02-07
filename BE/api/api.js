const APP=require("express")();
const mysql=require("mysql")
const ENV=process.env
const PORT=80;
const MYSQL_DB_HOST=ENV.MYSQL_DB_HOST  || console.error("DB host not specified");
const MYSQL_DB_USER=ENV.MYSQL_DB_USER  || console.error("DB User not specified");
const MYSQL_DB_PASSWORD=ENV.MYSQL_DB_PASSWORD || console.error("DB User password not specified");
const MYSQL_DB_PORT=ENV.MYSQL_DB_PORT || console.error("DB port not specified");
const MYSQL_DB=ENV.MYSQL_DB || console.error("DB  not specified");

var connection  = mysql.createConnection({
  host: MYSQL_DB_HOST,
  user: MYSQL_DB_USER,
  password: MYSQL_DB_PASSWORD,
  database: MYSQL_DB
})
connection .connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


APP.get('/status', function (req, res) {
	res.send('It is working')
})

APP.listen(PORT, () => console.log(`Example app lisdstening on port ${PORT}!`))
