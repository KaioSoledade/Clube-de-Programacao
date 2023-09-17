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

  selecaoimagembutao("CSS/Imagens/2.png");

  setInterval(autoChangeImage, 5000);
});





window.sr = ScrollReveal({ reset: true });

sr.reveal('.revell', { durantion: 10000 });

sr.reveal('.revell0',
  {
    rotate: { x: 100, y: 0, z: 1000 },
    durantion: 2000
  });


sr.reveal('.revell1', { durantion: 200000 });


sr.reveal('.revell2', {
  rotate: { x: 0, y: 80, z: 0 },
  durantion: 2000
});

sr.reveal('.revell3',
  {
    rotate: { x: 100, y: 0, z: 0 },
    durantion: 2000
  });

sr.reveal('.revell4', {
  origin: 'left',
  distance: '100px',
  duration: 1000,
  easing: 'ease-in-out',
});




const popup1 = document.getElementById("dialog1");
const info1 = document.getElementById("button1o");
const fechar1 = document.getElementById("button1f");
info1.onclick = function () {
  popup1.classList.add('show');
  popup1.classList.remove('none')
}
fechar1.onclick = function () {
  popup1.classList.add('none')
  popup1.classList.remove('show');
}

const popup2 = document.getElementById("dialog2");
const info2 = document.getElementById("button2o");
const fechar2 = document.getElementById("button2f");
info2.onclick = function () {
  popup2.classList.add('show');
  popup2.classList.remove('none')
}
fechar2.onclick = function () {
  popup2.classList.add('none')
  popup2.classList.remove('show');
}


const popup3 = document.getElementById("dialog3");
const info3 = document.getElementById("button3o");
const fechar3 = document.getElementById("button3f");
info3.onclick = function () {
  popup3.classList.add('show');
  popup3.classList.remove('none')
}
fechar3.onclick = function () {
  popup3.classList.add('none')
  popup3.classList.remove('show');
}


const popup4 = document.getElementById("dialog4");
const info4 = document.getElementById("button4o");
const fechar4 = document.getElementById("button4f");
info4.onclick = function () {
  popup4.classList.add('show');
  popup4.classList.remove('none')
}
fechar4.onclick = function () {
  popup4.classList.add('none')
  popup4.classList.remove('show');
}


const popup5 = document.getElementById("dialog5");
const info5 = document.getElementById("button5o");
const fechar5 = document.getElementById("button5f");
info5.onclick = function () {
  popup5.classList.add('show');
  popup5.classList.remove('none')
}
fechar5.onclick = function () {
  popup5.classList.add('none')
  popup5.classList.remove('show');
}


const popup6 = document.getElementById("dialog6");
const info6 = document.getElementById("button6o");
const fechar6 = document.getElementById("button6f");
info6.onclick = function () {
  popup6.classList.add('show');
  popup6.classList.remove('none')
}
fechar6.onclick = function () {
  popup6.classList.add('none')
  popup6.classList.remove('show');
}