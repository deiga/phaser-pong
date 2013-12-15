var express = require('express');
var port = process.env.PORT || 5000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use('/bower_components', express.static(__dirname + '/bower_components'));
}).listen(port, function() {
  console.log("Listening on " + port);
});
