'use strict'
var Mol_product=require('../models/product');
var fs = require("fs");
var path = require("path");


var controller ={	
	home: function(req, res){
		return res.status(200).send({
			message:'hola soy la home desde json'
		});
	},
	test: function(req, res){
		return res.status(200).send({
			message:'Ejecutando test'
		});
	},
	//SAVE DATA
	saveProduct: function(req, res){
		var product= new Mol_product();
		var params=req.body;
		product.name=params.name;
		product.brand=params.brand; 
		product.model = params.model;
		product.description=params.description;
		product.color=params.color;
		product.price=params.price;
		product.image=null;
	

		product.save((err, productStored)=>{
			if(err) return res.status(500).send({message:'Error al guardar el producto'});
			if(!productStored) return res.status(404).send({message:'No se ha podido guardar el producto'});
			return res.status(200).send({product: productStored});			
		});
	},
	//SHOW DATA
	getProduct: function(req, res){
		var productId = req.params.id;
		if(productId == null) return res.status(402).send({message:'Error al mostrar el producto'});
		Mol_product.findById(productId,(err, product)=>{
			if(err) return res.status(500).send({message:'Error al mostrar el producto'});
			if(!product) return res.status(404).send({message: 'No se ha podido mostrar el producto'});
			return res.status(200).send({product});
		});
	},
	//SHOW LIST DATA
	getProducts: function(req, res){
		Mol_product.find({}).sort('-year').exec((err, products)=>{
			if (err) return res.status(500).send({message:'Error al mostrar producto'});
			if(!products) return res.status(404).send({message:'Producto no existen'});
			return res.status(200).send({products});
		});
	},
	//UPDATE
	updateProduct: function (req, res){
		var productId = req.params.id;
		var update = req.body;
		Mol_product.findByIdAndUpdate(productId, update,{new:true},(err, updateProduct)=>{
			if(err) return res.status(500).send({message: 'Error en actualizar producto'});
			if(!updateProduct) return res.status(404).send({message:'Producto no  encontrado para actualizar'});
			return res.status(200).send({product: updateProduct});
		});
	},
	//DELETE
	deleteProduct: function(req, res){
		var productId = req.params.id;
		Mol_product.findByIdAndRemove(productId,(err, deleteProduct)=>{
			if(err) return res.status(500).send({message:'Error al eliminar un producto'});
			if(!deleteProduct) return res.status(404).send({message:'El archivo a eliminar no existe'});
			return res.status(200).send({product: deleteProduct});
		});
	},
	//UPLOAD IMAGE	
	uploadImage: function (req, res){
		var productId = req.params.id;
		var fileName= 'Imagen no subida...';
		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];
			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'gif' || fileExt == 'jpeg'){
				Mol_product.findByIdAndUpdate(productId,{image:fileName},{new: true},(err, updateProduct)=>{
					if(err) return res.status(500).send({message:'Error la imagen no se ha subido'});
					if(!updateProduct) return res.status(404).send({message:'El product no existe o no se ha asignado la imagen'});
					return res.status(200).send({product: updateProduct});
				});
			}else{
				fs.unlink(filePath, (err)=>{
					return res.status(500).send({message:'La extensión no existe'});
				});
			}
		}else{
			return res.status(500).send({message: fileName});
		}
	},
	// METHOD FOR RETURNING THE IMAGE
	getImageFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/'+file;
		//In case the path fs exists
		fs.exists(path_file,(exists)=>{
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({message:'No existe la imagen.....'});
			}
		});
	}



};
//EXPORT
module.exports=controller;

