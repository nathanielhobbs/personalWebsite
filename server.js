'use strict'

var express = require('express')
var app = express()

var port = process.env.PORT || 3000;

//set view engine to ejs (prefer this over Jade)
app.set('view engine', 'ejs')

// index page
app.get('/', function(req,res) {
   res.render('pages/index')
})

// about page
app.get('/about', function(req, res) {
   res.render('pages/about')
})

// about page
app.get('/contact', function(req, res) {
   res.render('pages/contact')
})

app.listen(port)
console.log('Server started. Listening on port', port)
