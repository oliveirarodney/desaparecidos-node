module.exports = function(app){
    app.post('/logout', function (req, res, next) {
        console.log(res.locals)
        console.log(res.locals.user)
        delete res.locals.user
        delete req.session.user
        console.log(res.locals)
        console.log(res.locals.user)
        console.log('redirecionou pra home')
        return res.redirect('/')
        
    })
}