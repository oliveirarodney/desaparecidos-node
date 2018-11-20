let express = require('express') 
let consign = require('consign')
let body_parser = require('body-parser')
let expressValidator = require('express-validator')
let expressLayouts = require('express-ejs-layouts')
let expressSession = require('express-session')
let app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public')) //Define em qual pasta estarão os arquivos estáticos.
app.use(body_parser.urlencoded({extended:true}))
app.use(expressValidator())
app.use(expressLayouts)
app.use(expressSession({
    secret: 'o palmeiras não tem mundial',
    resave: false,
    saveUninitialized: true,
    /*cookie: {
        maxAge: 1000*3,
        secure: true
    }*/
}))
app.use(function(req, res, next) {
    res.locals.user = req.session.user
    console.log("Local: ")
    console.log(res.locals.user)
    console.log("Sessão: ")
    console.log(req.session.user)
    next()
})

consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;