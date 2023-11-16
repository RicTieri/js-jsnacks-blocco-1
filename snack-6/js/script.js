const partyList = [
  'giovanni',
  'francesco',
  'giorgio',
  'ermando',
  'sofia',
  'elisabetta'
]

const guestName = prompt('inserisci il tuo nome')
let accepted = false

for (let i=0; i < partyList.length; i++){
  if( guestName == partyList[i]){
    accepted = true
  }
}

if(accepted){
  console.log(guestName)
}