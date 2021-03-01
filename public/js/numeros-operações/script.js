const cardNBoard = document.querySelector("#slides-one");
const cardDBoard = document.querySelector("#slides-two");
const cardOBoard = document.querySelector("#slides-three");
const imagensN = [
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
const imagensD = [
    "D 01.png",
    "D 02.png",
    "D 03.png",
    "D 04.png",
    "D 05.png",
    "D 06.png",
    "D 07.png",
    "D 08.png",
    "D 09.png", 
];
const imagensO = [
    "O 01.png",
    "O 02.png",
    "O 03.png",
    "O 04.png",
];
let cardFirHTML = "";
let cardSecHTML = "";
let cardOperacaoHTML = "";
let position = 1;
    imagensN.forEach(img => {
        cardFirHTML += `
           <div id= "slide-${position++}" class= "card" data-card= "${img}">
                <img class= "card-face" src= "/image/cards/${img}"> 
            </div>
            `
        });
position = 1;
    imagensD.forEach(img => {
        cardSecHTML += `
            <div id= "slide-${(position++)}" class= "card" data-card= "${img}">
                <img class= "card-face" src= "/image/cards/${img}"> 
            </div>
            `
    });
position = 1;
    imagensO.forEach(img => {
        cardOperacaoHTML += `
        <div id= "slide-${(position+4)}" class= "card" data-card="${img}">
            <img class= "card-face" src= "/image/cards/${img}"> 
        </div>
        `
    }); 
    
cardNBoard.innerHTML = cardFirHTML;
cardDBoard.innerHTML = cardSecHTML;
cardOBoard.innerHTML = cardOperacaoHTML;

/** Fim HTML */ 

document.querySelector("#slide-1").onclick = () => {
    document.getElementById('slide-box-2').style.display= "none";
    document.getElementById('slide-box-3').style.display= "none";
    document.getElementById('slide-box-4').style.display= "none";
    document.getElementById('slide-box-1').style.display= "block";
}
document.querySelector("#slide-2").onclick = () => {
    document.getElementById('slide-box-1').style.display= "none";
    document.getElementById('slide-box-2').style.display= "block";
    document.getElementById('slide-box-3').style.display= "none";
    document.getElementById('slide-box-4').style.display= "none";
}
document.querySelector("#slide-3").onclick = () => {
    document.getElementById("slide-box-1").style.display= "none";
    document.getElementById("slide-box-3").style.display= "block";
    document.getElementById('slide-box-2').style.display= "none";
    document.getElementById('slide-box-4').style.display= "none";
}
document.querySelector("#slide-4").onclick = () => {
    document.getElementById("slide-box-1").style.display= "none";
    document.getElementById("slide-box-4").style.display= "block";
    document.getElementById('slide-box-2').style.display= "none";
    document.getElementById('slide-box-3').style.display= "none";
}
