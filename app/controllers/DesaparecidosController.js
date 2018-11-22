module.exports.ListarDesaparecidos = function(app, req, res) {
    let desaparecidos = {}
    let search = req.body
    
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)

    console.log(search)

    if(search.nome === '') {
        if(search.estadodes === '') {
            console.log('Retorna todos os desaparecidos')
            DesaparecidosDAO.getAllDesaparecidos(function(error, result) {
                if(!error) {
                    if (result.length > 0) {
                        desaparecidos = result
                    } else {
                        console.log('A pesquisa não retornou nenhum valor')
                    }
                } else {
                    console.log(error)
                }
                res.render('pages/search', {desaparecidos})
            })
        } else {
            console.log('Pesquisa pela cidade')
            DesaparecidosDAO.getCidadeDesaparecidos(search, function(error, result) {
                if(!error) {
                    if (result.length > 0) {
                        desaparecidos = result
                    } else {
                        console.log('A pesquisa não retornou nenhum valor')
                    }
                } else {
                    console.log(error)
                }
                res.render('pages/search', {desaparecidos})
            })
        }
    } else if(search.estadodes === '') {
        console.log('Pesquisa pelo nome')
        DesaparecidosDAO.getNomeDesaparecidos(search, function(error, result) {
            if(!error) {
                if (result.length > 0) {
                    desaparecidos = result
                } else {
                    console.log('A pesquisa não retornou nenhum valor')
                }
            } else {
                console.log(error)
            }
            res.render('pages/search', {desaparecidos})
        })
    } else {
        console.log('Pesquisa nome e cidade')
        DesaparecidosDAO.getSearchDesaparecidos(search, function(error, result) {
            if(!error) {
                if (result.length > 0) {
                    desaparecidos = result
                } else {
                    console.log('A pesquisa não retornou nenhum valor')
                }
            } else {
                console.log(error)
            }
            res.render('pages/search', {desaparecidos})
        })
    }
}

module.exports.NovoDesaparecido = function(app, req, res) {
    let desaparecido = req.body
    console.log(req.body)
    console.log(desaparecido)
    desaparecido.usuario_id = res.locals.user[0].idusuario
    console.log(desaparecido)
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)

    DesaparecidosDAO.storeDesaparecido(desaparecido, function(error) {
        if(error) {
            console.log(error)
        } else {
            res.redirect('/')
        }
    })
}