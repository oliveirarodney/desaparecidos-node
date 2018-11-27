module.exports = function(app){
    app.get('/page/:id', function (req, res, next) {
        app.app.controllers.DesaparecidosController.getDesaparecido(app, req, res)
    })

    app.post('/page/:id/edit', function (req, res) {
        console.log('enviando informações')
        app.app.controllers.DesaparecidosController.EditarDesaparecido(app, req, res)
    })   

    app.get('/page/:id/delete/:iduser', function (req, res) {
        if(res.locals.user[0].idusuario == req.params.iduser || res.locals.user[0].adm == 1){
            app.app.controllers.DesaparecidosController.DesaparecidoDelete(app, req, res)
        } else {
            res.redirect('/error')
        }
    })
}