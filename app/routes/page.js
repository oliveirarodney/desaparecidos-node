module.exports = function(app){
    app.get('/page', function (req, res) {
        res.render('pages/page')
    })
}