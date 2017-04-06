var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use('/css',express.static(__dirname + '/css'));
app.use('/img',express.static(__dirname + '/imge'));
app.use('/js',express.static(__dirname + '/js'));

app.get('/', function( req , res ){
    res.render('index');
});
app.get('/aboutme', function( req , res ){
    res.render('about');
});
app.get('/works', function( req , res ){
    res.render('works');
});
app.get('/contact', function( req , res ){
    res.render('contact');
});
app.listen(port);