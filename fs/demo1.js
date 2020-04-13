const fs = require('fs')
// try{
//   fs.unlink('/tmp/hello')
//   console.log('successfully deleted /tmp/hello');
// }catch(err){
//   console.log(err)
// }
fs.open('/buffer/demo1.js','r',(err,fd)=>{
  if(err) throw err;
  fs.close(fd,(err)=>{
    if(err) throw err
  })
})