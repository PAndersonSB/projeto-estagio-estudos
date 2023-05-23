const bancodados = require('./conexao');
const express = require('express');
const app = express();
const body = require('body-parser');
app.use(body.json());

app.get('/api/cursos', async(req, res) => {
    const consulta = "select * from CURSO";
 
    bancodados.query(consulta, function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });


  app.get('/api/cursos/:id', async(req, res) => {
    const consulta = "select * from CURSO where id = ?";
 
    bancodados.query(consulta, [req.params.id] ,function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });


  app.post('/api/cursos/inserir', async(req, res) => {
    const inserir = "INSERT INTO CURSO SET nome = ?";
 
    const body = req.body;
 
    bancodados.query(inserir, [body.nome] ,function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });


  app.put('api/cursos/alterar/:id', async(req, res) => {
    const alterar = "UPDATE CURSO SET nome = ? where id = ?";
 
    const body = req.body;

    bancodados.query(alterar, [body.nome, req.params.id] ,function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });



  app.delete('/api/cursos/delete/:id', async(req, res) => {
    const del = "DELETE from CURSO where id = ?";
 
    bancodados.query(del, [req.params.id] ,function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });
 


  app.listen(3080, () => {
    console.log("Servidor iniciado na porta 3080: http://localhost:3080");
 });



 