'use strict'

var express = require('express');
var PhoneController = require('../controllers/phone');
var router=express.Router();
//collect files in req.files in controllers and upload files in multipart
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'});

//PHONES
router.post('/save-phone', PhoneController.savePhone);
router.get('/phone/:id?', PhoneController.getPhone);
router.get('/phones', PhoneController.getPhones); 
router.put('/phone/:id', PhoneController.updatePhone);
router.delete('/phone/:id', PhoneController.deletePhone); 
router.post('/upload-image-phone/:id', multipartMiddleware, PhoneController.uploadImage);
router.get('/get-image-phone/:image', PhoneController.getImageFile);


//EXPORTAR
module.exports=router;