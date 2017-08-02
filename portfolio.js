//Requiring express library
const express = require('express');
//Initialising express library
const app = express();

//Setting PUG view engine
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

//----------------ROUTES----------------

//ROUTE 01: HOME------------------------
app.get('/', function(req, res){
	res.render("index");
});

//ROUTE 02: ABOUT------------------------
app.get('/about', function(req, res){
	res.render("about");
});

//ROUTE 03: CV------------------------
app.get('/cv', function(req, res){
	res.render("cv");
});

//ROUTE 04: CONTACT------------------------
app.get('/contact', function(req, res){
	res.render("contact");
});

//------------DEFINING PORT 8080 FOR SERVER----------------------
var server = app.listen(8080, () => {
	console.log('Yo, this http://localhost is running:' + server.address().port);
});