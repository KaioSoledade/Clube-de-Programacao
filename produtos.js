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
  
    selecaoimagembutao("garrafaclube.png");
  
    setInterval(autoChangeImage, 5000);
  });
  