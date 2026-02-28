const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '65.99.252.253', 
  user: 'tovar',
  password: 'ZXCVqwer1234!"#$',
  database: 'hay_system'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos como ID ' + connection.threadId);
});

module.exports = connection;
