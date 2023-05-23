
const mysql = require('mysql');

const conexao = mysql.createConnection(
    { 
    host: "localhost", 
    user: "root", 
    password: "",
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
