let app = require('./config/server')
let favicon = require('serve-favicon')
let path = require('path')

let port = 5000;
app.listen(port, function () {
    console.log('Servidor rodando com express na porta', port)
})
