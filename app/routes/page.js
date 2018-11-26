module.exports = function(app){
    app.get('/page/:id', function (req, res, next) {
        app.app.controllers.DesaparecidosController.getDesaparecido(app, req, res)
    })

    app.post('/page/:id/edit', function (req, res) {
        console.log('enviando informações')
        console.log(req.body)
        app.app.controllers.DesaparecidosController.EditarDesaparecido(app, req, res)
    })   
}