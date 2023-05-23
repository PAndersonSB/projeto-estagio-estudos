const bancodados = require('./conexao');
const express = require('express');
const app = express();
const body = require('body-parser');
app.use(body.json());

app.get('/', async(req, res) => {
    const consulta = "select * from CURSO";
 
    bancodados.query(consulta, function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });

  app.get('/:id', async(req, res) => {
    const consulta = "select * from CURSO where id = ?";
 
    bancodados.query(consulta, [req.params.id] ,function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });

  app.post('/inserir', async(req, res) => {
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


  app.put('/alterar/:id', async(req, res) => {
    const alterar = "UPDATE CURSO SET nome = ? where id = ?";
 
    bancodados.query(alterar, ["LPOOII", req.params.id] ,function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });

  
  app.delete('/delete/:id', async(req, res) => {
    const del = "DELETE from CURSO where id = ?";
 
    bancodados.query(del, [req.params.id] ,function(err, result){
       if (err){
          console.log(err);
       }else{
 
          res.send(result);
       }
    });
  });
 