var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors');
	mongoose = require('mongoose');

var app = express();
var productCtrl = require('./api/controllers/ProductCtrl');

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//API

var mongoUri = 'mongodb://localhost/ecommerce';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connection to mongoDB successful')
});

app.post('/api/products', productCtrl.post);
app.get('/api/products', productCtrl.get);
app.get('/api/products/:id', productCtrl.productById);
app.put('/api/products/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.remove);


var port = 8080;

app.listen(port, function(){
	console.log("Listening on port ", port);
});

exports = module.exports = app;