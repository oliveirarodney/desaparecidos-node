module.exports = function(app){
    app.get('/edit', function (req, res) {
        res.render('pages/edit')
    })
}