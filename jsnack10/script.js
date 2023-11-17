// Inserisci un <h1> al centro della pagina con un numero randomico all'interno e un bottone sotto.
const divCounter = document.getElementById('counter');
const numCounter = document.createElement('h1');
let randomNum = Math.floor(Math.random() * 100);
const btnElement = document.getElementById('add-btn');

divCounter.appendChild(numCounter);
numCounter.append(randomNum);
// Ad ogni click del bottone aumento il numero nell'h1 di 3 e lo aggiorno in pagina. 

btnElement.addEventListener('click', function() {
  randomNum = randomNum + 3;
  numCounter.innerHTML = randomNum;
})