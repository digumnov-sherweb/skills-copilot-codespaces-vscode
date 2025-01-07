// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var comments = [];

app.use(bodyParser.json());
app.use(express.static('public'));