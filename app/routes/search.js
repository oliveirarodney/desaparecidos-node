module.exports = function(app){
    app.post('/search', function (req, res) {
        app.app.controllers.DesaparecidosController.ListarDesaparecidos(app, req, res)
    })

    app.get('/search', function (req, res) {
        let desaparecidos = {}
        res.render('pages/search', {desaparecidos})
    })
    
}