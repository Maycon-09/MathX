//let progress = <%= user.username %> ;
var progress;

document.onload = progress = "0%"; progressCharacter(); desibledLink();


function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

document.getElementById('lvl-01').onclick= ()=> {
  window.open('/introducao', 'introducao', 'resizable,height=1200,width=1400'); 
  progress = "20%";
  console.log(progress)
  progressCharacter();
}; 
document.getElementById('lvl-02').onclick= ()=> {
  window.open('/homeGame', 'home-game', 'resizable,height=1200,width=1400'); 
  progress = "30%";
  console.log(progress)
  progressCharacter();
}
document.getElementById('lvl-03').onclick= ()=> {
  window.open('/homeGameSoma', 'home-game', 'resizable,height=1200,width=1400'); 
  progress = "40%";
  console.log(progress)
  progressCharacter();
}
document.getElementById('lvl-04').onclick= ()=> {
  window.open('/homeGameSubtracao', 'home-game', 'resizable,height=1200,width=1400'); 
  progress = "60%";
  console.log(progress)
  progressCharacter();
}
document.getElementById('lvl-05').onclick= ()=> {
  window.open('/homeGameMultiplicacao', 'home-game', 'resizable,height=1200,width=1400'); 
  progress = "80%";
  console.log(progress)
  progressCharacter();
}
document.getElementById('lvl-06').onclick= ()=> {
  window.open('/homeGameDivisao', 'home-game', 'resizable,height=1200,width=1400'); 
  progress = "100%";
  console.log(progress)
  progressCharacter();
}


// desibled link

function desibledLink(){
  if(progress == "0%") {
    document.querySelector("#lvl-02").classList.add('disabled')
    document.querySelector("#lvl-03").classList.add('disabled')
    document.querySelector("#lvl-04").classList.add('disabled')
    document.querySelector("#lvl-05").classList.add('disabled')
    document.querySelector("#lvl-06").classList.add('disabled')
  }else if(progress == "20%") {
    document.querySelector("#lvl-01").classList.add('disabled')
    document.querySelector("#lvl-02").classList.remove('disabled')
    document.querySelector("#lvl-03").classList.add('disabled')
    document.querySelector("#lvl-04").classList.add('disabled')
    document.querySelector("#lvl-05").classList.add('disabled')
    document.querySelector("#lvl-06").classList.add('disabled')
    document.querySelector("#flexCheckDisabled01").checked = true;
  } else if (progress == "30%") {
    document.querySelector("#lvl-02").classList.add('disabled')
    document.querySelector("#lvl-03").classList.remove('disabled')
    document.querySelector("#lvl-04").classList.add('disabled')
    document.querySelector("#lvl-05").classList.add('disabled')
    document.querySelector("#lvl-06").classList.add('disabled')
    document.querySelector("#flexCheckDisabled02").checked = true;
  }else if (progress == "40%" ) {
    document.querySelector("#lvl-03").classList.add('disabled')
    document.querySelector("#lvl-04").classList.remove('disabled')
    document.querySelector("#lvl-05").classList.add('disabled')
    document.querySelector("#lvl-06").classList.add('disabled')
    document.querySelector("#flexCheckDisabled03").checked = true;
  }else if (progress == "60%") {
    document.querySelector("#lvl-04").classList.add('disabled')
    document.querySelector("#lvl-05").classList.remove('disabled')
    document.querySelector("#lvl-06").classList.add('disabled')
    document.querySelector("#flexCheckDisabled04").checked = true;
  }else if (progress == "80%") {
    document.querySelector("#lvl-05").classList.add('disabled')
    document.querySelector("#lvl-06").classList.remove('disabled')
    document.querySelector("#flexCheckDisabled05").checked = true;
  }else if (progress == "100%") {
    document.querySelector("#flexCheckDisabled06").checked = true;
    document.querySelector("#lvl-01").classList.remove('disabled')
    document.querySelector("#lvl-02").classList.remove('disabled')
    document.querySelector("#lvl-03").classList.remove('disabled')
    document.querySelector("#lvl-04").classList.remove('disabled')
    document.querySelector("#lvl-05").classList.remove('disabled')
  }
}


function progressCharacter(){
// Progress Bar

document.getElementById('progress-bar').style.width = progress;
document.getElementById('progress-bar').innerHTML = `<h6 id="bar">${progress}</h6>`;

//Box Character
  const characterBoard = document.querySelector("#progressCharacter");
  const Characters = [
    "Progress 01.png",
    "Progress 02.png",
    "Progress 03.png",
    "Progress 04.png",
    "Progress 05.png",
    "Progress 06.png",
];


  let level = 0;
  if(progress == "20%" || progress == "30%"){
    level = 1;
  } else if(progress == "40%"){
    level = 2;
  } else if(progress == "60%"){
    level = 3;
  } else if(progress == "80%"){
    level = 4;
  }else if(progress == "100%"){
    level = 5;
  }

  let progressCharacter = [Characters[level]];
  progressCharacter.forEach(img => {
    progressCharacter = `
      <div data-card= "${img}">
          <img id= "${level}" class= "character" src= "/image/Progress/${img}"> 
      </div>
      `
  });
  characterBoard.innerHTML = progressCharacter;
  desibledLink();
}