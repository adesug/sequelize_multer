const produkRoutes= require('express').Router();
const produkControllers = require('../controllers/produkController');
const uploadMiddleware = require('../helpers/uploadMiddleware');

produkRoutes.get('/', produkControllers.tampilProduk);
produkRoutes.post('/', uploadMiddleware,produkControllers.simpanProduk);

module.exports= produkRoutes;