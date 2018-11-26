module.exports = function(app){
    app.get('/user', function (req, res) {
        if (res.locals.user) {
            app.app.controllers.DesaparecidosController.ListarDesaparecidosUser(app, req, res)
        } else {
            res.redirect('/login')
        }
    })

    app.get('/deleteuser', function (req, res) {
        app.app.controllers.UsuarioController.UsuarioDelete(app, req, res)
    })
}