module.exports = function(app){
    app.get('/page/:id/edit', function (req, res) {
        app.app.controllers.DesaparecidosController.getDesaparecidoEdit(app, req, res)
    })

    app.post('/page/:id/edit', function (req, res) {
        app.app.controllers.DesaparecidosController.EditarDesaparecido(app, req, res)
    })   
}