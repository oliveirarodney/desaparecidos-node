module.exports.enviarcomentario = function(app, req, res) {
    let comentario = {
        comentario: req.body.comentario,
        desaparecido_id: req.params.id,
        usuario_id: res.locals.user[0].idusuario
    }

    let connection = app.config.dbConnection()
    let ComentariosDAO = new app.app.models.ComentariosDAO(connection)

    ComentariosDAO.storeComentario(comentario, function(error) {
        if(!error) {
            return res.redirect('/page/' + comentario.desaparecido_id)
        } else {
            console.log(error)
            return res.redirect('/page/' + comentario.desaparecido_id)
        }
    })
}

module.exports.excluircomentario = function(app, req, res) {
    let id = req.params.idcomment
    let page = req.params.id
    console.log(id)
    let connection = app.config.dbConnection()
    let ComentariosDAO = new app.app.models.ComentariosDAO(connection)

    ComentariosDAO.deleteComentario(id, function(error) {
        if(!error) {
            return res.redirect('/page/' + page)
        } else {
            console.log(error)
            return res.redirect('/page/' + page)
        }
    })
}

module.exports.editarcomentario = function(app, req, res) {
    let comentario = {
        comentario: req.body.comentario,
        desaparecido_id: req.params.id,
        usuario_id: res.locals.user[0].idusuario
    }
    console.log(comentario)
    let page = req.params.id
    console.log(page)
    let connection = app.config.dbConnection()
    let ComentariosDAO = new app.app.models.ComentariosDAO(connection)

    ComentariosDAO.updateComentario(page, comentario, function(error) {
        if(!error) {
            return res.redirect('/page/' + page)
        } else {
            console.log(error)
            return res.redirect('/page/' + page)
        }
    })
}