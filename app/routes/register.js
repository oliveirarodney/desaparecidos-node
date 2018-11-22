module.exports = function(app){
    app.post('/register', function(req, res) {
        let teste = req 
        console.log('tessteeeee')
        console.log(teste)
        app.app.controllers.DesaparecidosController.NovoDesaparecido(app, req, res)
    })
    
    app.get('/register', function (req, res) {
        if (res.locals.user) {
            res.render('pages/register')
        } else {
            res.redirect('/login')
        }
    })
}