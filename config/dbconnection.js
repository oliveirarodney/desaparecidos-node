let credentials = require('./credentials.json')
let mysql = require('mysql')
let crypto = require('crypto')

let connMySQL = function () {
    console.log("Iniciada a conexão com o banco");
    return connection = mysql.createConnection({
        host: credentials.host,
        user: credentials.user,
        password: credentials.password,
        database: credentials.database
    });
}

module.exports = function(){
	return connMySQL;
}
