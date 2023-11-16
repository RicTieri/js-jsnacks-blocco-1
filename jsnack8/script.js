// Chiedi un numero di 7 cifre all'utente 
const newNumber = parseInt(prompt('Inserire un numero a 7 cifre'));
// calcola la somma di tutte le cifre che compongono il numero.
const array = Array.from(newNumber.toString()).map(Number);
console.log(array)