'use strict'

var path = require('path')
var express = require('express')
var app = express()

var port = process.env.PORT || 3000;

//set view engine to ejs (prefer this over Jade)
app.set('view engine', 'ejs')

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static(path.join(__dirname + '/public')));

// index page
app.get('/', function(req,res) {
   res.render('pages/index')
})

// about page
app.get('/about', function(req, res) {
   res.render('pages/about')
})

// contact page
app.get('/contact', function(req, res) {
   res.render('pages/contact')
})

// 360 page
app.get('/360', function(req, res) {
	res.render('pages/360')
})

app.get('/360/:picture', function(req,res) {
	res.render('pages/360/'+req.params.picture)
})

// garden page
app.get('/garden', function(req, res) {
   res.render('pages/garden')
})

// garden about page
app.get('/garden/garden_about', function(req, res) {
   res.render('pages/garden_about')
})

app.listen(port)
console.log('Server started. Listening on port', port)
