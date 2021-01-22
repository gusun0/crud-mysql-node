// referenciar a express
const express = require('express');
// invocando a express mediante su clases
const app = express();



// Definiendo a nuestro motor de plantilla
app.set('view engine','ejs');

// Se le indica como vamos a a capturar los datos de los formularios 

app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Rutas para registros
app.use('/',require('./router'));


app.listen(3000, () => {
 console.log('Server corriendo en localhost');
});
