// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre):
const twoDigits = parseInt(prompt('inserisci un numero a due cifre'));
const fourDigits = parseInt(prompt('inserisci un numero a quattro cifre'));
let result = twoDigits;
// moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

for (let i = 0; i < 1; i++) {
  result = result * 2;
  if (fourDigits > result){
    i--;
  }
}


console.log(result)