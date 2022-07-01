const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

// creamos una renderizacion estatica:
app.use(express.static(__dirname + '/public'));

//Creamos una ruta para los parciales
hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS engine (para renderizar desde hbs)
app.set('view engine', 'hbs');

// creamos el render para la ruta "/"
app.get('/', (req, res) => {
    res.render('index');
});

// creamos el render para la ruta "/about"
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    console.log(req.url);
    let salida = {
        nombre: 'bebopCat',
        edad: 40,
        url: req.url,  //mostrara /data
    }

    // esta funcion detecta que es un objeto el parametro
    // y automatiamente lo convierte a json.
    res.send(salida);
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});






