function dbConnection(){
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'manager',
	  database : 'guddu'
	});

	connection.connect();

	connection.query('SELECT * from emp', function(err, rows, fields) {
	  if (!err)
	    console.log('The solution is: ', rows);
	  else
	    console.log('Error while performing Query.');
	});

	connection.end();
}

module.exports.dbConnection = dbConnection;