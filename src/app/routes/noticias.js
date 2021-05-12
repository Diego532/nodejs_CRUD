const dbconnection = require('../../config/dbConnection');

module.exports = app => {

    const connection = dbconnection();  // esta es la variable que va a contener la conexion a la base de datos 

    app.get('/', (req , res) => {
        connection.query('select * from empleado', (err,result) => {
            res.render('./noticias/noticias',{
                noticias: result
            });
        });
        
    });
}