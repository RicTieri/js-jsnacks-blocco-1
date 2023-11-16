// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre):
const twoDigits = parseInt(prompt('inserisci un numero a due cifre'));
const fourDigits = parseInt(prompt('inserisci un numero a quattro cifre'));
let result;
// moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

if (fourDigits > twoDigits){
  result = twoDigits * 2
}

console.log(result)