var express = require('express'),
    app=express(),
    path=require('path');

var port=process.env.PORT || 3000;

app.use('/assets',express.static(__dirname+'/public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use('/', function(req,res,next){
    console.log('Request Url:' + req.url);
    next();
});

app.get('/',function(req,res){
    res.render('index');
});

app.get('/index.html',function(req,res){
    res.render('index');
});

app.get('/aboutme.html',function(req,res){
    res.render('aboutme');
});

app.get('/contact.html',function(req,res){
    res.render('contact');
});

app.get('/works.html',function(req,res){
    res.render('works');
});



app.listen(port);