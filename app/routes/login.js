module.exports = function(app){
    app.post('/login', function(req, res){
        console.log('autenticando')
        app.app.controllers.UsuarioController.UsuarioAuth(app, req, res)
    })
    
    app.get('/login', function (req, res, next) {
        if (!res.locals.user) {
            res.render('pages/login', { user: '' })
        } else {
            console.log('redirecionou pra home')
            return res.redirect('/')
        }
        console.log('next')
        return next()
    })
}