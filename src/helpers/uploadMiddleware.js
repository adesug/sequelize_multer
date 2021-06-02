const multer = require('multer');
const path = require('path');
const response = require('./response');
//config penyimpanan
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback (null, './public/gambar');
    },
    filename: (req,file, callback)=>{
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}` // Tanggal-Nama. extensi
        callback(null, nameFormat);

    },

});
const fileFilter = (req,file,callback)=>{
    // if(path.extname(file.originalname) !== '.png')
    if(path.extname(file.originalname) !== '.png' && file.mimetype !== 'image/jpeg')
    {
        // callback(new Error ('FORMAT file tidak valid'));
        req.validateError = 'Format file tidak valid'
        return callback(null,false,req.validateError);
    }
    callback(null,true);
}

//config upload 
const upload = multer({
    storage,
    limits : 2 * 1000 * 1000, // 2mb
    fileFilter
});
//controller multer
const singleUpload = (req,res,next) => {
    const uploadProcessing = upload.single("gambar")
    uploadProcessing(req,res,(error)=>{
        if(error) {
            response.error(res, "error multer", 500, error);
        } else if(req.validateError){
            response.error(res, req.validateError, 403, error);
        }else{
            next();
        }

    });
};

module.exports = singleUpload;