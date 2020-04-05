'use strict'//MODELO DE PROYECTO
var mongoose=require('mongoose');
var Schema=mongoose.Schema;//esquema de modelo

var productSchema = Schema({
	name:String,
	brand:String,
	model:String,
	description:String,
	color:String,
	price:Number,
	image:String
});
 
//te cambia a plural db_designs // te agrega based de datos
module.exports= mongoose.model('product', productSchema);
//
// can be anyone   'product'
