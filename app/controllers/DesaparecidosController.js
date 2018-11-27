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

module.exports.ListarDesaparecidosUser = function(app, req, res) {
    let desaparecidos = {}
    let id = res.locals.user[0].idusuario
    let connection = app.config.dbConnection()
    console.log(res.locals.user)
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)

    DesaparecidosDAO.getDesaparecidosUser (id, function(error, result) {
        if(!error) {
            if (result.length > 0) {
                desaparecidos = result
                console.log(desaparecidos)
                res.render('pages/user', {desaparecidos})
            } else {
                desaparecidos = result
                console.log(desaparecidos.length)
                console.log('A pesquisa não retornou nenhum valor')
                res.render('pages/user', {desaparecidos})
            }
        } else {
            console.log(error)
        }
    })
}

module.exports.NovoDesaparecido = function(app, req, res) {
    let desaparecido = req.body
    desaparecido.usuario_id = res.locals.user[0].idusuario

    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)

    DesaparecidosDAO.storeDesaparecido(desaparecido, function(error) {
        if(error) {
            console.log(error)
        } else {
            res.redirect('/user')
        }
    })
}

module.exports.getDesaparecidoEdit = function(app, req, res) {
    let desaparecido = {}
    let id = req.params.id
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)
    console.log('agora eu to puxando as coisa do banco')
    DesaparecidosDAO.getDesaparecido(id, function(error, result) {
        if(!error) {
            desaparecido = result
            console.log(desaparecido)
            console.log('vou renderizar')
            res.render('pages/edit', {desaparecido})
        } else {
            res.redirect('/page/'+id)
        }
    })
}
module.exports.getDesaparecido = function (app, req, res) {
    let desaparecido = {}
    let id = req.params.id
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)

    DesaparecidosDAO.getDesaparecido(id, function(error, result) {
        if(!error){
            if(result.length > 0) {
                result.comentarios = {}
                desaparecido = result
                console.log('opa retornei alguma coisa')
                console.log(desaparecido)

                let ComentariosDAO = new app.app.models.ComentariosDAO(connection)
                ComentariosDAO.getComentarios(desaparecido[0].iddesaparecido, function(error, result) {
                    if(!error) {
                        if(result.length > 0) {
                            desaparecido.comentarios = result
                            console.log('COMENTOU')
                            console.log(desaparecido)
                            return res.render('pages/page', { desaparecido })
                        } else {
                            console.log('nenhum comentário')
                            return res.render('pages/page', { desaparecido })
                        }
                    } else {
                        console.log(error)
                    }
                })
                console.log(desaparecido)
            } else {
                console.log('A consulta não retornou nada')
            }
        } else {
            console.log(error)
        }
        
    })
}

module.exports.EditarDesaparecido = function (app, req, res) {
    let desaparecido = {}
    desaparecido = req.body
    console.log("Estou editando")
    console.log(desaparecido)
    let id = req.params.id
    desaparecido.iddesaparecido = id
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)
    console.log(desaparecido.iddesaparecido)
    DesaparecidosDAO.updateDesaparecido(desaparecido, function(error) {
        if(!error) {
            res.redirect('/page/'+id)
        } else {
            console.log(error)
            res.redirect('/')
        }
    })
}

module.exports.ListarTodosDesaparecidos = function(app, req, res) {
    let desaparecidos = {}
    let desaparecidosInativos = {}
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)
    
    DesaparecidosDAO.getAllDesaparecidos(function(error, result) {
        if(!error) {
            console.log(result)
            desaparecidos = result
            
            DesaparecidosDAO.getAllDesaparecidosInativos(function(error, result) {
                if(!error) {
                    desaparecidosInativos = result
                    res.render('pages/admin/listdesaparecidos', { desaparecidos, desaparecidosInativos })
                }
            })
        } else {
            console.log(error)
            res.redirect('/asdjasdj')
        }
    })
}

module.exports.DesaparecidoDelete = function(app, req, res) {
    let id = req.params.id
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)
    DesaparecidosDAO.deleteDesaparecido(id, function(error) {
        if(error) {
            console.log(error)
        } else {
            if(res.locals.user[0].adm == 1){
                res.redirect('/listdesaparecidos')
            } else {
                res.redirect('/user')
            }
        }
    })
}

module.exports.DesaparecidoRestaurar = function(app, req, res) {
    let id = req.params.id
    let connection = app.config.dbConnection()
    let DesaparecidosDAO = new app.app.models.DesaparecidosDAO(connection)
    DesaparecidosDAO.restaurarDesaparecido(id, function(error) {
        if(error) {
            console.log(error)
        } else {
            if(res.locals.user[0].adm == 1){
                res.redirect('/listdesaparecidos')
            } else {
                res.redirect('/user')
            }
        }
    })
}