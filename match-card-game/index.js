const suits = ['Hearts','Diamonds','Spades','Clubs']
const values =  ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
const decksInput = document.getElementById('numOfDecks')

const createDeck = () => {
  const deck = []
  suits.forEach((suit)=>{
    values.forEach((value)=>{
      deck.push(`${value} of ${suit}`)
    })
  })
  return deck
}

const combineDecks = (num) => {
  const bigDeck = []
  for(num; num--;) {
    const tempDeck = createDeck()
    bigDeck.push(...tempDeck)
  }
  console.log(bigDeck)
  return bigDeck
}

const handleButton = () => {
  
  combineDecks(decksInput.value)
  decksInput.value=''
}
