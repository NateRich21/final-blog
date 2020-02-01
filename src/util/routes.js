const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const connection = mysql.createPool({
	host	: 'localhost',
	user	: 'root',
	password: '135Howl84$$$',
	database: 'test'
});

const app = express()

app.get('/', (req, res) => {
	res.send('hello from the products server');
})


app.use(cors());

app.listen(8000, () => {
	console.log('server running on 8000')
})
