module.exports = function(app) {
    app.get('/login/auth', function(req, res){
        app.app.controllers.UsuarioAuth(app, req, res)
    })
}