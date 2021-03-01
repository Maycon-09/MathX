const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')
const gameController = require('./controllers/gameController')
const progressController = require('./controllers/progressController')

///roteamento
router.get('/', userController.home)
router.get('/acess', userController.loggedIn, gameController.acess)
router.get('/login', userController.login_form)
router.post('/login', userController.login)
router.get('/signUp', userController.registro)
router.post('/register', userController.save)
router.get('/logout', userController.logout)
router.post('/logout', progressController.saveProgress)

// Introdução - Números e Operações
router.get('/introducao', gameController.numerosOperacoes)
// jogo da memoria
router.get('/homeGame', gameController.homeGame)
router.get('/jogoMemoria01', gameController.memoria01)
router.get('/jogoMemoria02', gameController.memoria02)
router.get('/jogoMemoria03', gameController.memoria03)

// Operação Soma
router.get('/homeGameSoma', gameController.homeGameSoma)
router.get('/soma01', gameController.soma01)
router.get('/soma02', gameController.soma02)

// Operação Subtração
router.get('/homeGameSubtracao', gameController.homeGameSubtração)
router.get('/subtracao01', gameController.subtração01)
router.get('/subtracao02', gameController.subtração02)

// Operação Multiplicação
router.get('/homeGameMultiplicacao', gameController.homeGameMultiplicação)
router.get('/multiplicacao01', gameController.multiplicação01)
router.get('/multiplicacao02', gameController.multiplicação02)

// Operação Divisão
router.get('/homeGameDivisao', gameController.homeGameDivisão)
router.get('/divisao01', gameController.divisão01)
router.get('/divisao02', gameController.divisão02)

module.exports = router;