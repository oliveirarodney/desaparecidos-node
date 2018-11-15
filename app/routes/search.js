module.exports = function(app){
    app.get('/search', function (req, res) {
        res.render('pages/search')
    })
}