const app =require('express')()
const compress =require('./vedioComprsion')
const fileUpload=require('./helper/fileUpload');
const PORT = process.env.PORT||8080
app.listen(PORT)
console.debug("server is up ")


app.post('/compressVedio'

,fileUpload.single('vedio'),async(req,res,next)=>{

var vidPath=req.file.path;
try
{
compress(vidPath).then(data => {
  console.debug(data)
  res.download(data.outputPath)



}).catch(err => console.log(err))


}catch(err){
  throw err
}


    
});