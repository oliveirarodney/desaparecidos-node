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

module.exports.ListarTodosUsuarios = function(app, req, res) {
    let usuarios = {}
    let usuariosInativos = {}
    let connection = app.config.dbConnection()
    let UsuariosDAO = new app.app.models.UsuariosDAO(connection)
    
    UsuariosDAO.getAllUsuarios(function(error, result) {
        if(!error) {
            console.log(result)
            usuarios = result
            
            UsuariosDAO.getAllUsuariosInativos(function(error, result) {
                if(!error) {
                    usuariosInativos = result
                    res.render('pages/admin/listusers', { usuarios, usuariosInativos })
                }
            })
        } else {
            console.log(error)
            res.redirect('/asdjasdj')
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
    let id = req.params.id
    let connection = app.config.dbConnection()
    let UsuariosDAO = new app.app.models.UsuariosDAO(connection)
    UsuariosDAO.deleteUsuario(id, function(error) {
        if(error) {
            console.log(error)
        } else {
            if(res.locals.user){
                res.redirect('/listusers')
            } else {
                res.redirect('/logout')
            }
        }
    })
}

module.exports.UsuarioRestaurar = function(app, req, res) {
    let id = req.params.id
    let connection = app.config.dbConnection()
    let UsuariosDAO = new app.app.models.UsuariosDAO(connection)
    UsuariosDAO.restaurarUsuario(id, function(error) {
        if(error) {
            console.log(error)
        } else {
            if(res.locals.user){
                res.redirect('/listusers')
            } else {
                res.redirect('/logout')
            }
        }
    })
}