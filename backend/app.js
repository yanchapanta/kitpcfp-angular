'use strict'

var express=require('express');
var bodyParser=require('body-parser');

//importar

var ProjectRutas= require('./routes/product');
var PhoneRutas= require('./routes/phone');
var app = express();

//MIDDLEWARE

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//CORS
// Configure headers and cors
// in this way we allow from one access to another, from one domain to another
// in the * put the domain allowed when you have a domain
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//RUTAS

app.use('/api', ProjectRutas);
app.use('/api', PhoneRutas);


//EXPORTAR
module.exports= app;




















//RUTAS

// app.get('/',(req, res)=>{
// 	res.status(200).send(
// 		"<h1>Ok Página en funcionamiento</h1>"
// 	)
// });
// app.post('/test/:id',(req, res)=>{

// 	console.log(req.body.nombre);
// 	console.log(req.query.web);
// 	console.log(req.params.id);
// 	res.status(200).send({
	
// 		message:'hola mundo desde nodejs'	})
// });