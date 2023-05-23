const mysql = require("mysql");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = {
  getConnection() {
    return new Promise(function (resolve, reject) {
      pool.getConnection(function (error, connection) {
        if (error) {
          reject(error);
          return;
        }
        resolve(connection);
      });
    });
  },
};