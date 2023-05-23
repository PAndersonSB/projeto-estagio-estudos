# INTRODUÇÃO AO DESENVOLVIMENTO WEB COM NODE.JS

## Sobre o curso
```

Objetivos: Abordar as principais funcionalidades do Node.js e como utilizá-las para desenvolver aplicações web modernas. 
Professores: Prof. Dr. Cleber Lira e Prof. Dr. Thiago Mendes
Datas:   28 de abril, 05, 12, 19 de maio de 2023 das 14h às 16h.
Carga horária: 8 horas
Local: Online | Microsoft Teams

```


## Acesso ao Banco de Dados

Crie um diretório para iniciar o seu projeto. Em seguida digite:

```sh
npm init

```
Visão de um arquivo package.json

```
{
  "name": "nodejsbd",
  "version": "1.0.0",
  "description": "## Sobre o curso ```",
  "main": "conexao.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```
Instalar a dependência do Banco de Dados

```
npm install mysql
```

Utilizar o módulo instalado

```
const mysql = require('mysql');

```
Código para conexão com o banco de dados
```

const conexao = mysql.createConnection(
    { 
    host: "localhost", 
    user: "root", 
    password: "12345678",
    database: "inovar"
    });

conexao.connect(function (err) {
       if (err){
        console.log ("Ocorre um problema na conexao " , err)
       }else{
        console.log ("Conexao bem sucedida")
       }
  
});

module.exports = conexao;

```
Execute o projeto
```
node conexao.js
```


No arquivo app.js inicie incluindo os seguintes comandos


```
const bancodados = require('./conexao');
const express = require('express');
const app = express();
const body = require('body-parser');
app.use(body.json());

```
Instalar o módulo express

```
npm install express;

```

## Elaborar o CRUD

Acesso as informações via GET

```sh
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

```
Acesso as informações via GET - Filtro por ID

Instale o RESTer - O RESTer é um Cliente (Chrome/Mozilla) para acessar os Serviços Web.

```sh
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

```
Método POST

```sh
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
```
Método PUT



```sh
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

```
Método DELETE


```sh
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

```

## Uso do nodemon

Reiniciar o servidor quando ocorrer mudança no código

```sh
sudo npm install -g nodemon
```
```
npm install –save-dev nodemon

```

Para rodar com suporte ao nodemon


```
nodemon app.js

```




## Suporte e desenvolvimento

<p align="center">
	Desenvolvido por Cleber Lira e Tiago Mendes </br>
  
</p>
