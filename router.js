const express=require('express');

const router=express.Router();

const conexion=require('./database/db')

router.get('/',(req,res)=>{
   
   conexion.query('SELECT * FROM USERS',(error,results)=>{
       if (error) {
           console.log('ERROR AL CONSULTAR');
       }else {
        res.render('index',{results:results});
        }
   })
});

router.get('/prueba',(req,res)=>{
   

         res.render('prueba');

 });

//NUEVOS REGISTROS
router.get('/create',(req,res)=>{

    res.render('create');
   
 });

//EDITAR REGISTROS
router.get('/edit/:id',(req,res)=>{
     const id = req.params.id;
     console.log(id);
     conexion.query('SELECT * FROM USERS where iduser = ?',[id],(error,results)=>{
        if (error) {
            throw error;
        }else{ 
             res.render('edit',{user:results}); 
 
          
        }   

    });   
     
   
 });

router.get('/delete/:id',(req,res)=>{
    const iduser = req.params.id;
    console.log(iduser); 
    console.log('DELETE PARA EJECUTARSE CON EL ID: '+iduser);
    conexion.query('DELETE FROM USERS WHERE iduser = ?',[iduser],(error,results)=>{
        if (error) {
            throw error;
        }else{
            console.log(results);
            console.log('DELETE EJECUTADO CON EL IDUSER: '+iduser);
            res.redirect('/');
        }
    });   
 });  
 
const crud= require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports =router;