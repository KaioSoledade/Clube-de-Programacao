document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    const imageButtons = document.querySelectorAll(".image-button");
    let imagamIndex = 0;
    
  



    function selecaoimagembutao(imageURL) {
      logo.style.backgroundImage = `url(${imageURL})`;
  
      imageButtons.forEach(button => {
        const buttonImageURL = button.getAttribute("data-image");
        if (buttonImageURL === imageURL) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }
  



    imageButtons.forEach(button => {
      button.addEventListener("click", function () {
        const imageURL = this.getAttribute("data-image");
     selecaoimagembutao(imageURL);
        imagamIndex = Array.from(imageButtons).indexOf(this);
      });
    });


    
  
    function autoChangeImage() {
      imagamIndex = (imagamIndex + 1) % imageButtons.length;
      const nextImageURL = imageButtons[imagamIndex].getAttribute("data-image");
      selecaoimagembutao(nextImageURL);
    }
  
    selecaoimagembutao("clube-banner.png");
  
    setInterval(autoChangeImage, 5000);
  });





  window.sr = ScrollReveal({reset: true});

  sr.reveal ('.revell', {durantion: 10000});
  
  sr.reveal ('.revell0', 
      {rotate: {x: 100, y: 0, z: 1000},
      durantion: 2000});
  
  
  
  
  sr.reveal ('.revell1', {durantion: 200000});
  
  
  sr.reveal ('.revell2', {
      rotate: {x: 0, y: 80, z: 0},
      durantion: 2000});
  
  sr.reveal ('.revell3', 
      {rotate: {x: 100, y: 0, z: 0},
      durantion: 2000});
  
      // Inicialize o ScrollReveal
  sr.reveal('.revell4', {
      origin: 'left', // Define a direção da origem da animação
      distance: '100px', // Define a distância percorrida pela animação
      duration: 1000, // Define a duração da animação em milissegundos
      easing: 'ease-in-out', // Define a função de easing (aceleração/desaceleração) da animação
    });
    

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
