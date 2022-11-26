var express = require('express');
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'remotemysql.com',
    user: 'xxFhi3fR3w',
    password: 'ASTO8UWANW',
    connectionLimit: 5
});

var app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use('/img', express.static('web/img'));
app.use('/css', express.static('web/css'));
app.use('/js', express.static('web/js'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/web/index.html");
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/web/404.html");
});

app.listen(80);