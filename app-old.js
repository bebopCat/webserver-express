const http = require('http');

http.createServer((req, res) => {

    res.write('Hola mundo');
    res.end(); //informa que ya hemos terminado de recibir la respuesta

}).listen(8080);

console.log('Escuchando el puerto 8080')