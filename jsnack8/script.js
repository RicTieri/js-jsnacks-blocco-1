// Chiedi un numero di 7 cifre all'utente 
const newNumber = prompt('Inserire un numero a 7 cifre');
// calcola la somma di tutte le cifre che compongono il numero.
const array = Array.from(newNumber).map(Number);
let sum = 0;
console.log(array)

for (let i=0; i<array.length; i++){
  sum += array[i]
}

console.log(sum)