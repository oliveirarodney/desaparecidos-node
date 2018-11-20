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