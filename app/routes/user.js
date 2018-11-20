module.exports = function(app){
    app.get('/user', function (req, res) {
        if (res.locals.user) {
            res.render('pages/user')
        } else {
            res.redirect('/login')
        }
    })
}