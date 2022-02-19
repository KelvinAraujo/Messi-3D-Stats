const carta = document.querySelector('.carta');
const container = document.querySelector('.container');


container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  carta.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;

});


container.addEventListener("mouseleave", (e) => {
  carta.style.transition = "all 0.5s ease";
  carta.style.transform = `rotateY(0deg) rotateX(0deg)`;
})