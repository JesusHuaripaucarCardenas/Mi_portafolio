const htttp=require('http');
const express=require('express');
const app=express() ;

app.use(express.static(__dirname+'/'));

app.get('/',(req,res) => {
    res.render('index.html');
})

app.listen(5000, () => {
    console.log("Servidor corriendo en el puerto 5000");
  });
  