module.exports.getDelegacias = function(app, req, res) {
    let delegacias = {}
    let connection = app.config.dbConnection()
    let DelegaciasDAO = new app.app.models.DelegaciasDAO(connection)

    DelegaciasDAO.getDelegacias(function(error, result) {
        if(!error){
            if(result.length > 0) {
                delegacias = result
            } else {
                console.log('A consulta não retornou nada')
            }
        } else {
            console.log(error)
        }
        return res.render('pages/home', { delegacias })
    })
}