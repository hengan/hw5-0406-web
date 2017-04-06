var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/pic', express.static(__dirname + '/pic'));
app.use('/css', express.static(__dirname + '/css'));

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/index.html', function(req, res) {
	res.render('index');
});

app.get('/aboutme.html', function(req, res) {
	res.render('aboutme');
});

app.get('/contact.html', function(req, res) {
	res.render('contact');
});

app.get('/test.html', function(req, res) {
	res.render('test');
});

app.get('/work.html', function(req, res) {
	res.render('work');
});


app.post('/form', urlencodedParser, function(req,res){
	res.send("Thank you");
	console.log('Name is ' + req.body.name);
	console.log('Age is ' + req.body.age);
	console.log('Gender is ' + req.body.sex);
	console.log('Most like ' + req.body.like);
})

app.get('*', function(req, res) {
	res.render('err');
});

app.listen(port);