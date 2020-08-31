let factBody  = document.querySelector('#fact-body');
let fact = document.querySelector('#fact');

let yearInput = document.querySelector('#Yearinput');

yearInput.addEventListener('input', getFact);

function getFact() {
const year = yearInput.value;

 fetch(`http://numbersapi.com/${year}/year`)
 .then(response => response.text())
 .then(data => {
   if(year !== ''){ 
   fact.style.display = 'block';
   fact.style.textAlign = 'center';
   fact.style.fontSize = '20px';
   fact.style.color = 'white';
   factBody.innerText = data;   
   } 
})
 .catch(err => console.log(err))
}
