'use strict';

//declare and define all important variable

let body = document.getElementsByTagName('body')[0];

let section = document.querySelector('section');

let p = document.getElementsByTagName('p')[0];

let button = document.getElementsByTagName('button')[0];

let color = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let rand;

let even = 1;

//add listener to button

button.addEventListener('click', function() {

  if (p.innerText.length >= 6) {

    p.innerText = '';

  }

  

  //choose random color code

  for (let count = 1; count <= 6; count++) {

    rand = Math.random() * color.length;

    rand = Math.floor(rand);

    p.innerText += color[rand];

    if (count == 6) {

      p.innerText = '#' + p.innerText;

    }

  }

  body.style.backgroundColor = p.innerText;

  button.style.backgroundColor = p.innerText;

  

  //add gradient effect the button when clicked

  if (even == 1) {

    button.style.backgroundImage = 'linear-gradient(to top left, red, yellow, green)';

    even++;

  } else if (even == 2) {

    button.style.backgroundImage = 'linear-gradient(to bottom left, red, yellow, green)';

    even++;

  } else if (even == 3) {

    button.style.backgroundImage = 'linear-gradient(to bottom right, red, yellow, green)';

    even++;

  } else {

    button.style.backgroundImage = 'linear-gradient(to top right, red, yellow, green)';

    even = 1;

  }

  

  //add box shadow to section

 function shadow() {

   let pick = p.innerText.slice(1, 7).split('').reverse().join('');

   pick  = '#' + pick;

   section.style.boxShadow = `3px 3px 3px ${pick}, -3px -3px 3px ${pick}, -3px 3px 3px ${pick}, 3px -3px 3px ${pick}`;

 }

 shadow();

})

// applied copy system

p.addEventListener('click', function() {

  navigator.clipboard.writeText(p.innerText);

  alert('Copy Successful');

})
