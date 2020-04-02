'use strict'
var Mol_phone=require('../models/phone');
var fs = require("fs");
var path = require("path");


var controller ={
	//SAVE DATA
	savePhone: function(req, res){
		var phone= new Mol_phone();
		var params=req.body;
		phone.name=params.name;
		phone.brand=params.brand; 
		phone.model = params.model;
		phone.description=params.description;
		phone.color=params.color;
		phone.price=params.price;
		phone.image=null;
	

		phone.save((err, phoneStored)=>{
			if(err) return res.status(500).send({message:'Error al guardar el phone'});
			if(!phoneStored) return res.status(404).send({message:'No se ha podido guardar el phoneo'});
			return res.status(200).send({phone: phoneStored});			
		});
	},
	//SHOW DATA
	getPhone: function(req, res){
		var phoneId = req.params.id;
		if(phoneId == null) return res.status(402).send({message:'Error al mostrar el phoneo'});
		Mol_phone.findById(phoneId,(err, phone)=>{
			if(err) return res.status(500).send({message:'Error al mostrar el phoneo'});
			if(!phone) return res.status(404).send({message: 'No se ha podido mostrar el phoneo'});
			return res.status(200).send({phone});
		});
	},
	//SHOW LIST DATA
	getPhones: function(req, res){
		Mol_phone.find({}).sort('-year').exec((err, phones)=>{
			if (err) return res.status(500).send({message:'Error al mostrar phoneo'});
			if(!phones) return res.status(404).send({message:'Phoneo no existen'});
			return res.status(200).send({phones});
		});
	},
	//UPDATE
	updatePhone: function (req, res){
		var phoneId = req.params.id;
		var update = req.body;
		Mol_phone.findByIdAndUpdate(phoneId, update,{new:true},(err, updatePhone)=>{
			if(err) return res.status(500).send({message: 'Error en actualizar phoneo'});
			if(!updatePhone) return res.status(404).send({message:'Phoneo no  encontrado para actualizar'});
			return res.status(200).send({phone: updatePhone});
		});
	},
	//DELETE
	deletePhone: function(req, res){
		var phoneId = req.params.id;
		Mol_phone.findByIdAndRemove(phoneId,(err, deletePhone)=>{
			if(err) return res.status(500).send({message:'Error al eliminar un phoneo'});
			if(!deletePhone) return res.status(404).send({message:'El archivo a eliminar no existe'});
			return res.status(200).send({phone: deletePhone});
		});
	},
	//UPLOAD IMAGE	
	uploadImage: function (req, res){
		var phoneId = req.params.id;
		var fileName= 'Imagen no subida...';
		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];
			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'gif' || fileExt == 'jpeg'){
				Mol_phone.findByIdAndUpdate(phoneId,{image:fileName},{new: true},(err, updatePhone)=>{
					if(err) return res.status(500).send({message:'Error la imagen no se ha subido'});
					if(!updatePhone) return res.status(404).send({message:'El phone no existe o no se ha asignado la imagen'});
					return res.status(200).send({phone: updatePhone});
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

