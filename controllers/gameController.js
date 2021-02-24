const Game = require('../models/Game')
//var progress = 1;

exports.acess = function (req, res) {
    res.render('pages/acess-game', {layout: 'pages/acess-game'})
}

// introdução - números e operações
exports.numerosOperações = function (req, res) {
    res.render('pages/numeros-operações/números-operações', {layout: 'pages/numeros-operações/números-operações'})
}

// jogo da memoria
exports.homeGame = function (req, res) {
    res.render('pages/Jogo/home-game', {layout: 'pages/Jogo/home-game'})
} 
exports.memoria01 = function (req, res) {
    res.render('pages/Jogo/nivel01', {layout: 'pages/Jogo/nivel01'})
}
exports.memoria02 = function (req, res) {
    res.render('pages/Jogo/nivel02', {layout: 'pages/Jogo/nivel02'})
}
exports.memoria03 = function (req, res) {
    res.render('pages/Jogo/nivel03', {layout: 'pages/Jogo/nivel03'})
}

// operação soma
exports.homeGameSoma = function (req, res) {
    res.render('pages/operação-soma/home-game', {layout: 'pages/operação-soma/home-game'})
}
exports.soma01 = function (req, res) {
    res.render('pages/operação-soma/nivel 01', {layout: 'pages/operação-soma/nivel 01'})
}
exports.soma02 = function (req, res) {
    res.render('pages/operação-soma/nivel 02', {layout: 'pages/operação-soma/nivel 02'})
}

// operação subtração
exports.homeGameSubtração = function (req, res) {
    res.render('pages/operação-subtração/home-game', {layout: 'pages/operação-subtração/home-game'})
}
exports.subtração01 = function (req, res) {
    res.render('pages/operação-subtração/nivel 01', {layout: 'pages/operação-subtração/nivel 01'})
}
exports.subtração02 = function (req, res) {
    res.render('pages/operação-subtração/nivel 02', {layout: 'pages/operação-subtração/nivel 02'})
}

// operação multiplicação
exports.homeGameMultiplicação = function (req, res) {
    res.render('pages/operação-multiplicação/home-game', {layout: 'pages/operação-multiplicação/home-game'})
}
exports.multiplicação01 = function (req, res) {
    res.render('pages/operação-multiplicação/nivel 01', {layout: 'pages/operação-multiplicação/nivel 01'})
}
exports.multiplicação02 = function (req, res) {
    res.render('pages/operação-multiplicação/nivel 02', {layout: 'pages/operação-multiplicação/nivel 02'})
}

// operação divisão
exports.homeGameDivisão = function (req, res) {
    res.render('pages/operação-divisão/home-game', {layout: 'pages/operação-divisão/home-game'})
}
exports.divisão01 = function (req, res) {
    res.render('pages/operação-divisão/nivel 01', {layout: 'pages/operação-divisão/nivel 01'})
}
exports.divisão02 = function (req, res) {
    res.render('pages/operação-divisão/nivel 02', {layout: 'pages/operação-divisão/nivel 02'})
}
