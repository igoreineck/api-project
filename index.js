var express = require('express'),
	app = express(),
	port = 8080,
	bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));

app.use('/api/todos', todoRoutes);

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(port, function() {
	console.log('app is running on port ' + port);
});