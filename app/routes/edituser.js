module.exports = function(app){
    app.get('/edituser', function (req, res, next) {
        res.render('pages/edituser')
        return next()
    })

    app.post('/edituser', function (req, res) {
        app.app.controllers.UsuarioController.UsuarioEdit(app, req, res)
    })
    
}