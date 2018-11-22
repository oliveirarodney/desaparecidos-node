module.exports.UsuarioAuth = function (app, req, res) {
    let crypto = require('crypto')
    let usuario = req.body;
    usuario.password = crypto.createHash('md5').update(usuario.password).digest('hex')
    let connection = app.config.dbConnection()
    let UsuariosDAO = new app.app.models.UsuariosDAO(connection)
    UsuariosDAO.authUsuario(usuario, function(error, result) {
        if(!error){
            if(result.length > 0) {
                req.session.user = result
                res.locals.user = req.session.user
                console.log('Usuario autenticado')
                return res.redirect('/')
            } else {
                console.log("Usuário ou password inexistente")
                return res.redirect('/login')
            }
        } else {
            console.log("Erro")
            console.log(error)
            console.log("Usuário não autenticado")
            return res.redirect('/login')
        }
    })
}

module.exports.NovoUsuario = function(app, req, res) {
    let crypto = require('crypto')
    let usuario = req.body
    usuario.password = crypto.createHash('md5').update(usuario.password).digest('hex')
    delete usuario.email_confirmation
    delete usuario.password_confirmation
    console.log(usuario)
    let connection = app.config.dbConnection()
    let UsuariosDAO = new app.app.models.UsuariosDAO(connection)

    UsuariosDAO.storeUsuario(usuario, function(error) {
        if(error) {
            console.log(error)
        } else {
            res.redirect('/')
        }
    })
}

module.exports.UsuarioEdit = function(app, req, res) {
    console.log('test')
    let crypto = require('crypto')
    let usuario = {}
    console.log(req.body)
    usuario.idusuario = res.locals.user[0].idusuario
    usuario.nome = req.body.nome
    usuario.username = req.body.username
    usuario.password = crypto.createHash('md5').update(req.body.password).digest('hex')
    console.log(usuario)
    console.log('teste')
    let connection = app.config.dbConnection()
    let UsuariosDAO = new app.app.models.UsuariosDAO(connection)

    UsuariosDAO.updateUsuario(usuario, function(error) {
        if(error) {
        console.log(error)
        } else {
            req.session.user[0].nome = usuario.nome
            req.session.user[0].username = usuario.username
            req.session.user[0].password = usuario.password
            res.locals.user = req.session.user
            res.redirect('/')
        }
    })
}

module.exports.UsuarioDelete = function(app, req, res) {
    let usuario = res.locals.user[0]
    let connection = app.config.dbConnection()
    let UsuariosDAO = new app.app.models.UsuariosDAO(connection)
    console.log(usuario)
    UsuariosDAO.deleteUsuario(usuario.idusuario, function(error) {
        if(error) {
            console.log(error)
        } else {
            res.redirect('/logout')
        }
    })
}