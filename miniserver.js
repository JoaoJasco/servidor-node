var http = require('http');
var dt = require('./datetimemodule.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Bem-vindo! Conex&atilde;o bem sucedida.");
    res.write("<br /><br />");
    res.write("At this moment, the date and time are: " + dt.myDateTime());
    res.write("<br /><br />");
    res.write("Neste exato momento, a data e hora registradas s&atilde;o: " + dt.myDateTime());
    res.end();
}).listen(8080); 

/*
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080); 
*/