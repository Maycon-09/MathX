const pool = require('../db');

let progressGame = function(data, username) {
    this.data = data
    this.erros = []
    this.username = this.username
}
progressGame.prototype.loadProcess = function() {
    return new Promise((resolve, results) => {
        this.checkProgress().then((userProgress) => {
            if(userProgress && userProgress > 0){
                resolve("Progresso carregado")
            } else {
                results("Progresso invalido")
            }
        }).catch(() =>{
            reject("Erro ao carregar processo")
        })
    })
}

progressGame.prototype.checkProgress = function() {
    let userProgress;
    const consulta = "SELECT * FROM user_Progress L WHERE user_username = $1";
    const values = [this.data.username];
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) =>{
        if(error) {
            reject ("Erro ao encontrar progresso do usuário");
        } else {
            userProgress = results.rows[0]
            resolve(userProgress);
        }
         });
    });
}

progressGame.prototype.saveProgress = function() {
    const consulta = "INSERT INTO user_Progress(level, user_username) values($1,$2) WHERE user_username = $2 ";
    const values = [this.data.level, this.data.username];
    return new Promise((resolve, results) => {
        this.progress().then((progressGame) => {
            if(progressGame && progressGame <=7){
                resolve("Inserido com sucesso efetuado com sucesso")
            } else {
                results("Dados não conferem")
            }
        }).catch(() =>{
            reject("Erro ao salvar progresso")
        })
    })
}




