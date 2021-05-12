const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//settings
app.set('port', process.env.PORT || 4000 );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , '../app/views'));  //configuracion de la carpeta de las vistas 

//middleware body-parser
app.use(bodyParser.urlencoded({extended:false})); //extendend en false por que no se le van a pasar imagenes ni cosas complicadas
module.exports = app;

