const User = require('../models/User')

exports.home = function (req, res){
    if(req.session.user){
        res.render('pages/home', { user: req.session.user})
    } else{
        res.render('pages/home')
    }    
}
// login Usuário
exports.login_form = function (req, res){
    res.render('pages/login', {layout: 'pages/login'})
}

exports.login = function (req, res){
    let user = new User(req.body)
    user.login()
    .then(function(result){
        console.log(result);
        req.session.user = {
            username: user.data.username
        }
        req.session.save(function() {
            res.redirect("/")
        })
    }).catch(function(err){
        res.send(err)
    })
}

exports.loggedIn = function(req, res, next) {
    if(req.session.user) {
        next()
    }else {
        res.redirect('/login')
    }
}

exports.logout = function (req, res){
    req.session.destroy(function() {
        res.redirect("/")
    })
}

// registro Usuário
exports.registro = function (req, res){
    res.render('pages/registrar', {layout: 'pages/registrar'})
}

exports.save = function (req, res) {
    let user = new User(req.body)
    user.create()
    .then(function (result){
        res.render("pages/home")
    }).catch(function(err){
        res.send(err)
    })
}