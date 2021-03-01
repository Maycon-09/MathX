const pool = require('../db');
const bcrypt = require('bcryptjs');

let User = function(data) {
    this.data = data
    this.errors = []
}

User.prototype.login = function() {
    return new Promise((resolve, results) => {
        this.readByUsername().then((usuarioRecuperado) => {
            if(usuarioRecuperado && bcrypt.compareSync(this.data.password, usuarioRecuperado.password)){
                resolve("Login efetuado com sucesso")
            } else {
                results("Dados não conferem")
            }
        }).catch(() =>{
            reject("Erro ao efetuar login")
        })
    })
}

User.prototype.readByUsername = function() {
    const consulta = "SELECT * FROM users U WHERE U.username = $1";
    const values = [this.data.username];
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) =>{
        if(error) {
            reject ("Erro ao encontrar usuário");
        } else {
            usuarioRecuperado = results.rows[0]
            resolve(usuarioRecuperado);
        }
         });
    });
}

User.prototype.create = function() {
    let salt = bcrypt.genSaltSync(10)
    this.data.password = bcrypt.hashSync(this.data.password, salt)
    const consulta = "INSERT INTO users(username, password) values($1, $2)";
    const values = [this.data.username, this.data.password];
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) =>{
        if(error) {
            reject ("Erro ao inserir usuário");
        } else {
            resolve("Usuário Inserido com sucesso");
        }
         });
    });
};

module.exports = User