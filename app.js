let favicon = require('serve-favicon')
let app = require('./config/server')
let path = require('path')

/*let home = require('../app/routes/home')
let inserenotas = require('../app/routes/insere_notas')
let notas = require('../app/routes/notas')

home(app)
inserenotas(app)
notas(app)*/

let port = 5000;
//app.use(favicon(path.join(__dirname, 'config/public/images', 'favicon.ico')))
app.listen(port, function () {
    console.log('Servidor rodando com express na porta', port)
})
