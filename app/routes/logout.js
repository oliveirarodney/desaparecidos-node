module.exports = function(app){
    app.get('/logout', function (req, res, next) {
        delete res.locals.user
        delete req.session.user
        console.log('redirecionou pra home')
        res.redirect('/')
        return next()
    })

    app.post('/logout', function (req, res) {
        delete res.locals.user
        delete req.session.user
        console.log('redirecionou pra home')
        return res.redirect('/')
        
    })
}