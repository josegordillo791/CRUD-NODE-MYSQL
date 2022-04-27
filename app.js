const { urlencoded } = require('express');
const express = require('express');
const app=express();

app.set('view engine','ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use( express.json( ) );

app.use('/',require('./router'));

app.listen(8000,(res,err)=>{
   
        console.log('todo ok en http://localhost:8000');
   
    
});