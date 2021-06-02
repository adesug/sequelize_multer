const response =  require('../helpers/response')
const {produk} = require ('../models/')

module.exports ={
    tampilProduk: (req,res)=> {
            produk.findAll()

            .then((data) => {
                res.status(200).send({
                    msg: "tampil produk success",
                    status: 200,
                    data
                })
            }).catch((err) => {
                res.status(500).send({
                    msg:"tampil produk is eror",
                    status: 500,
                    error
                })
            });
    },
    simpanProduk : (req,res)=>{
        const{body} = req;

        const newBody = {
            ...body,
            gambar :  req.file.path
        };

        produk.create(newBody)
        .then((data)=> {
            response.success(res, "simpan data berhasil", 200, data)
        })
        .catch((error) => {
            response.error(res, "simpan data gagal", 500,error);

        })
    }
}