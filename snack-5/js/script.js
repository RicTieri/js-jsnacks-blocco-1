const firstWord = prompt('inserisci una parola')
const secondWord = prompt('inserisci una parola')

if (firstWord.length < secondWord.length) {
  console.log(firstWord)
  console.log(secondWord)
} else {
  console.log(secondWord)
  console.log(firstWord)
}