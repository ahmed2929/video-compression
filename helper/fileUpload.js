const path=require('path');
const multer=require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+path.join('..','..','video'))
    },
    filename: function (req, file, cb) {
      cb(null,Date.now()+'-'+file.originalname)
    }
  })


   
 module.exports= multer({ storage: storage})
   
 module.exports= multer({ storage: storage })