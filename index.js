const express = require('express');
const bodyparser = require('body-parser');
const consolidate = require('consolidate');


const app = express();

app.set('views', './views');
app.engine('html', consolidate.nunjucks);

//Set Static Path
app.use(express.static('/static'))


//Set MiddleWare
app.use(bodyparser.urlencoded());



function addUserName(request, response, next){
	response.locals.username = 'admin'

	next();
}

app.get('/',addUserName, function(req, res) {
	res.render('index.html');
});

app.get('/profile', function(req, res) {
	res.render('profile.html');
});

app.listen(3000, function() {
	console.log('Server started on Port 3000');
});

