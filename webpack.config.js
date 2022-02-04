const path= require('path');
module.exports={
   mode:"development",
   entry:'./src/App.js',
   output:{
    path:path.resolve(__dirname,'dist'),
    filename:"output.js",
 },
//  css-loader
module:{
   rules:[
{
   test:/\.css$/,
   use:[
      'style-loader',
      'css-loader'
   ]
}

   ]
},

//  css-loader
 devServer:{
 static:path.join(__dirname,'dist'),
 compress:true,
 port:8080
},


}