module.exports = function(app) {
    app.get('/listusers', function(req, res) {
        if(res.locals.user) {
            if(res.locals.user[0].adm === 1) {
                app.app.controllers.UsuarioController.ListarTodosUsuarios(app, req, res)
            } else {
                res.redirect('/error')
            }
        } else {
            res.redirect('/login')
        }
    })
}