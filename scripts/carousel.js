// function button (){
//     document.getElementById("bass").src="./img/carouselHomeBaixo2.png"
// }
var intervalId = window.setInterval(function(){
    changeImg();
  }, 3000);

const carousel = ["./img/carouselHomeBaixo1.jpg", "./img/carouselHomeBaixo2.png", "./img/carouselHomeBaixo3.png"];
let index = 0;

changeImg = () => {
    if (index >= carousel.length) index = 0;

    document.getElementById("bass").src = carousel[index];
    index++;
};