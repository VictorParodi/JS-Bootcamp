// A single element query
// const p = document.querySelector('p');
// console.log('p');
// p.remove()

// A multiple element query
const ps = document.querySelectorAll('p');

ps.forEach(function(p) {
  let text = p.textContent,
      long = text.length;

  p.textContent = '*';
  
  while(long > 1) {
    p.textContent += '*';
    long--;
  }
});

// Input fields
const form = document.querySelector('#form');
const textField = document.querySelector('#search-text');
const body = document.querySelector('body');
let text = '';

textField.addEventListener('input', function(e) {
  text = e.target.value;
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let paragraph = document.createElement('p');
  paragraph.textContent = text;
  body.appendChild(paragraph);
  event.target.childNodes[1].value = '';
});
