var http = require('http');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/img', express.static('web/img'));
app.use('/css', express.static('web/css'));
app.use('/js', express.static('web/js'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/web/index.html");
});

app.listen(80);