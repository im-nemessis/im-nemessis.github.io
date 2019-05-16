var color1 = document.querySelector('.color1');
var color = document.querySelector('.color2');
var body = document.querySelector('body');
var css = document.querySelector('h3');

function setGradient (){
     body.style.background = 'linear-gradient(to right,' 
     + color1.value 
     +','
     + color.value
      +')'
     css.textContent = body.style.background + ";";
}


color.addEventListener('input' , setGradient);
color1.addEventListener('input' , setGradient);