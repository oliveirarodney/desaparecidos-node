module.exports = function(app) {
    app.post('/page/:id/comment', function(req, res) {
        if (!res.locals.user) {
            res.render('pages/login', { user: '' })
        } else {
            app.app.controllers.ComentariosController.enviarcomentario(app, req, res)
        }        
    })

    app.post('/page/:id/comment/:idcomment/delete', function(req, res) {
        if (!res.locals.user) {
            res.render('pages/login', { user: '' })
        } else {
            app.app.controllers.ComentariosController.excluircomentario(app, req, res)
        }
    })

    app.post('/page/:id/comment/:idcomment/edit', function(req, res) {
        if (!res.locals.user) {
            res.render('pages/login', { user: '' })
        } else {
            console.log('TO EDITANDO ESSA PORRA')
            app.app.controllers.ComentariosController.editarcomentario(app, req, res)
        }
    })
}