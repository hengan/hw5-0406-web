var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/index.html', function(req, res) {
	res.render('index');
});

app.get('/works.html', function(req, res) {
	res.render('works');
});

app.get('/aboutme.html', function(req, res) {
	res.render('aboutme');
});

app.get('/contact.html', function(req, res) {
	res.render('contact');
});


app.get('*', function(req, res) {
	res.render('err');
});

app.post('/home.html', urlencodedParser, function(req,res){
	res.send("Thank you !");
	console.log('Your firstname is ' + req.body.firstname);
	console.log('Your lastname is ' + req.body.lastname);
	console.log('Email is ' + req.body.email);
	
})

app.listen(port);

app.get('/works.html',function(req,res){
    res.render('works');
});



app.listen(port);