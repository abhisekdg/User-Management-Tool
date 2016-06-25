var express = require('express');
var app = express();

var path = require('path');
var rootPath = path.normalize(path.join(__dirname, '/..'));
console.log(rootPath);
app.use('/', express.static(rootPath + '/client'));

app.all('/*', function (req, res, next) {
	// Just send the index.html for other files to support HTML5Mode
	res.sendFile('/client/index.html', {
		root: rootPath
	});
});

app.listen(process.env.PORT, function () {
	console.log("Listening on port ", process.env.PORT);
});
