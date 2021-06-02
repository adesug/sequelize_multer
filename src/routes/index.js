const mainRoutes = require('express').Router();
const produkRoutes = require('./produkRoutes');

mainRoutes.use('/api/produk',produkRoutes);

module.exports=mainRoutes;