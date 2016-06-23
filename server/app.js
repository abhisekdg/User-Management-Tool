var express = require('express');
var app = express();

var path = require('path');
var rootPath = path.normalize(path.join(__dirname, '/..'));
app.use('/', express.static(rootPath + '/client'));

app.listen(process.env.PORT, function () {
	console.log("Listening on port ", process.env.PORT);
});