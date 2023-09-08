

  

var CardPlanet1 = document.getElementById('imagem1');
var CardPlanet2 = document.getElementById('imagem2');
var CardPlanet3 = document.getElementById('imagem3');
var CardPlanet4 = document.getElementById('imagem4');


var Button1 = document.getElementById('button1')
Button1.addEventListener("click", submit1);
function submit1() {
    CardPlanet1.classList.add('imagem1-on');
    CardPlanet1.classList.remove('imagem1-off');
    CardPlanet2.classList.add('imagem2-off');
    CardPlanet3.classList.add('imagem3-off');
    CardPlanet4.classList.add('imagem4-off');
}

var Button2 = document.getElementById('button2')
Button2.addEventListener("click", submit2);
function submit2() {
    CardPlanet2.classList.add('imagem2-on');
    CardPlanet2.classList.remove('imagem2-off');
    CardPlanet1.classList.add('imagem1-off');
    CardPlanet3.classList.add('imagem3-off');
    CardPlanet4.classList.add('imagem4-off');
}

var Button3 = document.getElementById('button3')
Button3.addEventListener("click", submit3);
function submit3() {
    CardPlanet3.classList.add('imagem3-on');
    CardPlanet3.classList.remove('imagem3-off');
    CardPlanet2.classList.add('imagem2-off');
    CardPlanet1.classList.add('imagem1-off');
    CardPlanet4.classList.add('imagem4-off');
}

var Button4 = document.getElementById('button4')
Button4.addEventListener("click", submit4);
function submit4() {
    CardPlanet4.classList.add('imagem4-on');
    CardPlanet4.classList.remove('imagem4-off');
    CardPlanet2.classList.add('imagem2-off');
    CardPlanet3.classList.add('imagem3-off');
    CardPlanet1.classList.add('imagem1-off');
}