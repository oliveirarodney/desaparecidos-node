module.exports = function(app){
    app.get('/register', function (req, res) {
        if (res.locals.user) {
            res.render('pages/register')
        } else {
            res.redirect('/login')
        }
    })
}