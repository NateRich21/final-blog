const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

// STARTING THE APP \\
const app = express()


const SELECT_ALL_POSTS_QUERY = 'SELECT * FROM test_table';

//CREATE AND CONFIGURE CONNECTION TO DB \\
const connection = mysql.createConnection({
	host	: 'localhost',
	port 	: '3306',
	user	: 'root',
	password: '135Howl84$$$',
	database: 'test',
	connectionlimit: 10
});

//CONNECT TO DB \\
connection.connect(err => {
	if (err) { return err; };
});

app.use(cors());

// MAKE REQUEST TO URL'S INDEX-PAGE AND POST TEXT TO WEBPAGE \\
app.get('/', (req, res) => {
	res.send('hello from the products server');
})

app.get('/posts', (req, res) => {
	connection.query('SELECT * FROM test_table', (err, results) => {
		if(err) {
			return res.send('its the query');
		} else {
			return res.json({
				data: results
			})
		}
	});
});






app.listen(8000, () => {
	console.log('server running on 8000')
})
