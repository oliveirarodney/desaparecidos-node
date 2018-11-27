module.exports = function(app){
    app.get('/user', function (req, res) {
        if (res.locals.user) {
            app.app.controllers.DesaparecidosController.ListarDesaparecidosUser(app, req, res)
        } else {
            res.redirect('/login')
        }
    })

    app.get('/deleteuser/:id', function (req, res) {
        console.log(req.params.id)
        console.log(res.locals.user[0].idusuario)
        if(res.locals.user[0].idusuario == req.params.id || res.locals.user[0].adm == 1){
            console.log('entrei aqui deletar usuario')
            app.app.controllers.UsuarioController.UsuarioDelete(app, req, res)
        } else {
            console.log(req.params.id)
            console.log(res.locals.user[0].idusuario)
            res.redirect('/error')
        }
    })

    app.get('/restauraruser/:id', function (req, res) {
        console.log(req.params.id)
        console.log(res.locals.user[0].idusuario)
        if(res.locals.user[0].idusuario == req.params.id || res.locals.user[0].adm == 1){
            console.log('entrei aqui deletar usuario')
            app.app.controllers.UsuarioController.UsuarioRestaurar(app, req, res)
        } else {
            console.log(req.params.id)
            console.log(res.locals.user[0].idusuario)
            res.redirect('/error')
        }
    })
}