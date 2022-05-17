const express = require('express'); //IMPORTA REQUISITOS
const app = express();
const path = require('path'); //UNIFICA DIRECTORIOS WINDOWS LINUX

//PUERTO SERVIDOR
app.set('port', 3000);


app.set('views', path.join(__dirname, 'views')); //drieccion de las rutas de las vistas
app.engine('html',require('ejs').renderFile); //MODIFICA TERMINACION VISTAS
app.set('view engine', 'ejs'); //motor de plantillas


//MIDDLEWARES

//ROUTE
app.use(require('./routes/index'));



//STATIC FILES
app.use(express.static(path.join(__dirname,'public')));




//SEVIDOR LEVANTADO
app.listen(app.get('port'), () => {
    console.log('server on port', app.get);


});