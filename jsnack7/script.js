// Crea un array vuoto.
const oddNumber = [];
let number;
// Chiedi per 6 volte all'utente di inserire un numero
for (let i=0; i<6; i++){
  number = parseInt(prompt('inserisci un numero'));
  // controllare se è dispari se si inseriscilo nell'array.
  if ( number % 2 !== 0){
    oddNumber.push(number)
  }
}

console.log(oddNumber)