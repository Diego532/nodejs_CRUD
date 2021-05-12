const app = require('./config/server');

require('./app/routes/noticias')(app);

//iniciar el servidor 
app.listen(app.get('port'),() => {
    console.log('Server on port' ,app.get('port'));     
});