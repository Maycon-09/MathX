var acertos = 0; //contador de acertos
var erros = 0; //contador de erros

const cardBoard = document.querySelector("#soma");
const imagens = [
    "N 00.png",
    "N 01.png",
    "N 02.png",
    "N 03.png",
    "N 04.png",
    "N 05.png",
    "N 06.png",
    "N 07.png",
    "N 08.png",
    "N 09.png",
];
const imagensDed = [
    "D 01.png",
    "D 02.png",
    "D 03.png",
    "D 04.png",
    "D 05.png",
    "D 06.png",
    "D 07.png",
    "D 08.png",
    "D 09.png",
    "D 10.png", 
];
let randFir = Math.floor(Math.random() * imagens.length);
let randSec = (Math.floor(Math.random() * imagensDed.length));
let cardFirHTML = [imagens[randFir]];
let cardSecHTML = [imagensDed[randSec]];
let cardOperacaoHTML = "";

console.log(randFir, randSec)
    cardFirHTML.forEach(img => {
        cardFirHTML = `
           <div class= "card" data-card= "${img}">
                <img id= "${randFir}" class= "card-face" src= "/image/cards/${img}"> 
                <img class= "frontal-face" src= "/image/cards/frontal.png">
            </div>
            `
        });

    cardOperacaoHTML += `
            <div class= "card" data-card= "Operacao.png">
                    <img class= "frontal-face" src= "/image/cards/O 01.png"> 
            </div>
            `
        ;
        
    cardSecHTML.forEach(img => {
    cardSecHTML = `
        <div class= "card" data-card= "${img}">
                <img id= "${randSec} "class= "card-face" src= "/image/cards/${img}"> 
                <img class= "frontal-face" src= "/image/cards/frontal.png">
        </div>
        `
    });

cardBoard.innerHTML = cardFirHTML + cardOperacaoHTML + cardSecHTML ;
/** Fim HTML */ 

var cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let lockCard = false;

function verificarResposta(){
    let resposta = parseInt(document.getElementById("resposta"));
    alert(randFir+randSec+1);
    console.log(typeof (randFir + randSec));
    console.log(typeof resposta);
    checkForMatch(); 
    fimDeJogo();  
}
// verifica as respostas

function flipCard(){
    if(lockCard) return false;
    cards[0].classList.add("flip");
    cards[2].classList.add("flip");
} // vira carta

function checkForMatch(){
    let isMatch = (randFir + randSec + 1) == resposta.value;   
    //!isMatch ?  resertCards(isMatch):disableCards();
    if(isMatch) {
        alert("Parabéns !!! Você acertou a resposta.");
        acertos++; 
        disableCards();
    } else {
        alert("Resposta errada !!! Não desista, tente novamente.");
        erros++;
    }
    console.log(acertos, erros);
} // checa resposta 

function fimDeJogo() {
    let x = 35;
    let y = 0;
    if(acertos == 4){
        // Exibe POP UP
        setTimeout(() => {
            document.querySelector(".bg-modal").style.display = "flex";
            //alert("Parabéns !! Você finalizou o nível 01");  
            document.querySelector(".fechar").addEventListener('click', function() {
                document.querySelector(".bg-modal").style.display = "none";
            });  
        }, 500);
        // Cria o intervalo para movimentar o character
        setInterval(() => {
            x++;
            document.querySelector(".character").style.transform = `translate(${x}px, ${y}px)`;
            if (x > 475){ x = -35}; 
        }, 23);  
    }
}


function disableCards(isMatch){
    setTimeout(() => { 
    cards[0].classList.remove("flip");
    cards[2].classList.remove("flip");
    resertCards(isMatch);
}, 500);
} 
// vira carta -- SE: resposta for correta

function resertCards(isMatch = null) {
    if(isMatch == null){
        cards[0].removeEventListener("click", flipCard);
        cards[2].removeEventListener("click", flipCard);
    }
    [randFir, randSec, firstCard, secondCard, cardFirHTML, cardSecHTML, cards] = [null, null, null, null, null, null, null];
// Zera todas as variaveis utilizadas no processo
    
// Inicia se o reset das cartas possibilitando troca das cartas
    randFir = Math.floor(Math.random() * imagens.length);
    randSec = Math.floor(Math.random() * imagensDed.length);
    cardFirHTML = [imagens[randFir]];
    cardSecHTML = [imagensDed[randSec]];
    //console.clear();
    console.log(randFir, randSec)
    cardFirHTML.forEach(img => {
        cardFirHTML = `
            <div class= "card" data-card= "${img}">
                <img id= "${randFir}" class= "card-face" src= "/image/cards/${img}"> 
                <img class= "frontal-face" src= "/image/cards/frontal.png">
            </div>
            `
        });

    cardSecHTML.forEach(img => {
    cardSecHTML = `
        <div class= "card" data-card= "${img}">
                <img id= "${randSec} "class= "card-face" src= "/image/cards/${img}"> 
                <img class= "frontal-face" src= "/image/cards/frontal.png">
        </div>
        `
    });
    cardBoard.innerHTML = cardFirHTML + cardOperacaoHTML + cardSecHTML ;
// As cartas são trocadas    

    cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("click", flipCard));
// Adiciona as cartas na Variavel cards 

    flipCard();
}

cards.forEach(card => card.addEventListener("click", flipCard));
//adiciona evento na primeira rodada

document.getElementById('closeWindow').onclick = () => {
    window.close();
    return progress++;
}
