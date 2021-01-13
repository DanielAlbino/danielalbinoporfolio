// Wrap every letter in a span
var textWrapper = document.querySelector('.medium');
anime.timeline({loop: false})
  .add({
    targets: '.medium',
    scale: [3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 170*i
  })

var textWrapper = document.querySelector('.large');
anime.timeline({loop: false})
  .add({
    targets: '.large',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 300*i
  })

var textWrapper = document.querySelector('p');
anime.timeline({loop: false})
  .add({
    targets: 'p',
    scale: [2,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })

var textWrapper = document.querySelector('.small-img');
anime.timeline({loop: false})
  .add({
    targets: '.small-img',
    scale: [2,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })


  /* Animating about */
var box = document.querySelector('#box');
var project = document.querySelector('#projects');
var text = document.querySelector('#text');

var finance = document.querySelector('#finance');
var web = document.querySelector('#web');
var gaming = document.querySelector('#gaming');



var currenScrollPos = 0;
box.style.opacity = 0;
text.style.opacity = 0;
project.style.opacity = 0;
web.style.opacity = 0;
finance.style.opacity = 0;
gaming.style.opacity = 0;

window.onscroll = function(e){
  currenScrollPos = window.scrollY;
  box.style.opacity = setOpacity(currenScrollPos, 300, parseFloat(box.style.opacity));
  text.style.opacity = setOpacity(currenScrollPos, 500, parseFloat(text.style.opacity));
  project.style.opacity = setOpacity(currenScrollPos, 950, parseFloat(project.style.opacity));
  finance.style.opacity = setOpacity(currenScrollPos, 1250, parseFloat(finance.style.opacity));
  web.style.opacity = setOpacity(currenScrollPos, 1450, parseFloat(web.style.opacity));
  gaming.style.opacity = setOpacity(currenScrollPos, 1650, parseFloat(gaming.style.opacity));
}

 function setOpacity(currentScrollPos, setScrollPos, opacity){
  if(currentScrollPos >= setScrollPos){
     opacity += 0.0769231;
  }
  return opacity;
}


