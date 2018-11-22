module.exports = function(app){
    app.get('/', function (req, res) {
        app.app.controllers.DelegaciasController.getDelegacias(app, req, res)
        if(res.locals.user){
            console.log('Usuário ativo: ')
            console.log(res.locals.user)
            console.log(res.locals.user[0].username)
            console.log('autorizado!')
        } else {
            console.log('não autenticado')
        }
    })
}