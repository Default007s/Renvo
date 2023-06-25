// Imports
const express = require('express');
const swig = require('swig');
const path = require('path');
const consolidate = require('consolidate');
const app = express();
const port = 3000;


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/Images', express.static(__dirname + 'public/Images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

// Set Views
app.engine('html', consolidate.swig)
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/signup', function(req, res) {
  res.render('signup')
})

app.get('/classroomAdmin', function(req, res) {
  res.render('classroomAdmin')
})

app.get('/myDrives', function(req, res) {
  res.render('myDrives')
})

app.get('/myDrivesClassrooms', function(req, res) {
  res.render('myDrivesClassrooms')
})

app.get('/myDrivesMeetups', function(req, res) {
  res.render('myDrivesMeetups')
})

app.get('/myAccount', function(req, res) {
  res.render('myAccount')
})

app.get('/contactUs', function(req, res) {
  res.render('contactUs')
})

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))