'use strict'
var mongoose = require('mongoose');
var app=require('./app');
var port=3700;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/kitpcfp',{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(()=>{
		console.log('Conexion a la base de datos satisfactoriamente');
		//CREACIÓN DE SERVIDOR
		app.listen(port, ()=>{
			console.log('Servidor ejecutandose correctamente en localhost:3700');
		});

	})
	.then().catch(err => console.log(err));

