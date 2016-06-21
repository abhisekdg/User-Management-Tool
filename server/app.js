var express = require('express');
var app = express();

var path = require('path');
var rootPath = path.normalize(path.join(__dirname, '/..'));
app.use('/', express.static(rootPath + '/client'));

app.listen(9000, function () {
	console.log("Listening on 9000 port");
});