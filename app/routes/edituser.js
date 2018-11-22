module.exports = function(app){
    app.get('/edituser', function (req, res, next) {
        console.log('renderizando página edit')
        res.render('pages/edituser')
        console.log('next')
        return next()
    })

    app.post('/edituser', function (req, res) {
        console.log('enviando informações')
        console.log(req.body)
        app.app.controllers.UsuarioController.UsuarioEdit(app, req, res)
    })
    
}