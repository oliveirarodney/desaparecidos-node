module.exports = function(app){
    app.post('/login', function(req, res){
        app.app.controllers.UsuarioController.UsuarioAuth(app, req, res)
    })
    
    app.get('/login', function (req, res, next) {
        if (!res.locals.user) {
            res.render('pages/login', { user: '' })
        } else {
            return res.redirect('/')
        }
        console.log('next')
        return next()
    })
}