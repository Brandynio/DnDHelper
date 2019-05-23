var express = require('express');
var app = express();
var path = require('path');
var expressSession = require('express-session');

app.use(express.static('assets'));

app.use(session({
    key: 'userid',
    secret: 'mandoorhandhookcardoor',
    saveUninitialized: false,
    resave: false
}));

//login not required
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
})

//login not required
app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
})

//login not required
app.get('/dice', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/diceroller.html'));
})

//login required
app.get('/create', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/create.html'));
})

//login not required
app.get('/search', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/search.html'));
})

//login required
app.get('/display', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/display.html'));
})

app.listen(3000);