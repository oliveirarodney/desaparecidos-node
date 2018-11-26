module.exports = function(app){
    app.get('/page/:id/edit', function (req, res, next) {
        res.render('pages/edit', { desaparecido })
        console.log('next')
        return next()
    })

    app.post('/page/:id/edit', function (req, res) {
        console.log('enviando informações')
        console.log(req.body)
        app.app.controllers.DesaparecidosController.EditarDesaparecido(app, req, res)
    })   
}