'use strict'

var express = require('express');
var ProjectController = require('../controllers/product');
var router=express.Router();
//collect files in req.files in controllers and upload files in multipart
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'});

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-product', ProjectController.saveProduct);
router.get('/product/:id?', ProjectController.getProduct);
router.get('/products', ProjectController.getProducts); 
router.put('/product/:id', ProjectController.updateProduct);
router.delete('/product/:id', ProjectController.deleteProduct); 
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

//EXPORTAR
module.exports=router;  