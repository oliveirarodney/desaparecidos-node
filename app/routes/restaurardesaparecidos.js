module.exports = function(app){
    app.get('/page/:id/restaurar', function(req, res) {
        if(res.locals.user[0].idusuario == req.params.id || res.locals.user[0].adm == 1){
            console.log('entrei aqui deletar usuario')
            app.app.controllers.DesaparecidosController.DesaparecidoRestaurar(app, req, res)
        } else {
            res.redirect('/error')
        }
    })
}