module.exports = function(app){
    app.get('/', function (req, res) {
        if(res.locals.user){
            console.log('Usuário ativo: ')
            console.log(res.locals.user)
            console.log(res.locals.user[0].username)
            console.log('autorizado!')
            res.render('pages/home', {req})
        } else {
            console.log('não autenticado')
            res.render('pages/home', {req})
        }
    })
}