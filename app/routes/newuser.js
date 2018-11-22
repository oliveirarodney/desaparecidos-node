module.exports = function(app) {
    app.post('/newuser', function(req, res) {
        console.log(req.body)
        app.app.controllers.UsuarioController.NovoUsuario(app, req, res)
    })
    
    app.get('/newuser', function(req, res) {
        res.render('pages/newuser')
    })
}