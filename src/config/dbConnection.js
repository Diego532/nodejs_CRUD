const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host        : 'localhost',
        user        : 'root',
        password    : '',
        database    : 'empresa'
    });
}

// esa funcion me va a retornar una conexion a la base de datos 