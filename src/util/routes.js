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
});


app.get('/posts/view-post', (req, res) => {
	const { id } = req.query;
	const SELECT_SINGLE_POST = `SELECT * FROM test_table WHERE id=${id}`

	connection.query(SELECT_SINGLE_POST, (err, results) => {
		if (err) {
			return (err);
		} else {
			return res.json({
				data: results
			})
		}
	});
});


app.get('/posts/add', (req, res) => {

	// Initializes title, author and content, queries URL for title, author, and content then assigns them to the variables \\
	const { title, author, content } = req.query;


	// Creates a variable with the SQL INSERT query assigned to its value \\
	const INSERT_POST_QUERY = `INSERT INTO test_table (title, author, content) VALUES('${title}', '${author}', '${content}')`


	// Queries 'test-db' via the connection and returns err if unsuccessful \\
	connection.query(INSERT_POST_QUERY, (err, results) => {
		if(err) {
			return (err);
		} else {
			return res.send('successfully added post');
		}
	});
});


app.get('/posts', (req, res) => {
	connection.query(SELECT_ALL_POSTS_QUERY, (err, results) => {
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
