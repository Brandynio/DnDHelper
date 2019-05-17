var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/dice', function (req, res) {
    res.sendFile(path.join(__dirname + '/diceroller.html'));
})

app.get('/create', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/create.html'));
})

app.get('/search', function (req, res) {
    res.sendFile(path.join(__dirname + '/search.html'));
})

app.listen(3000);