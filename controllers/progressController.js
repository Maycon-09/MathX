const Progress = require('../models/ProgressGame');
var progresso = 0;
//exports.loadProgress = function (req, res, next) {

exports.loggedIn = function(req, res, next) {
    if(req.session.user) {
        next()
    }else {
    }
}
exports.saveProgress = function (req, res) {
    let progress = new Progress(req.body, req.session.user.username)
    progress.create()
    .then(function (result){
        res.render("pages/home")
    }).catch(function(err){
        res.send(err)
    })
}
