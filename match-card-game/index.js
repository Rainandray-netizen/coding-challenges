const suits = ['Hearts','Diamonds','Spades','Clubs']
const values =  ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
const decksInput = document.getElementById('numOfDecks')
const matchSelect = document.getElementById('matchSelect')

const createDeck = () => {
  const deck = []
  suits.forEach((suit)=>{
    values.forEach((value)=>{
      deck.push({
        suit,
        value
      })
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
  return bigDeck
}

const shuffleDeck = (deck) => {
  let counter = deck.length

  while(counter > 0){
    let index = Math.floor(Math.random() * counter)

    counter --

    let temp = deck[counter]
    deck[counter] = deck[index]
    deck[index] = temp
  }
  return deck
}

const isMatch = (card1, card2) => {
  switch(matchSelect.value){
    case 'suit':
      if(card1.suit === card2.suit){
        return true
      }else{
        return false
      }
    case 'value':
      if(card1.value === card2.value){
        return true
      }else{
        return false
      }
    case 'both':
      if((card1.value === card2.value)&&(card1.suit === card2.suit)){
        return true
      }else{
        return false
      }
  }
}

const handleButton = () => {
  const myDeck = shuffleDeck(combineDecks(decksInput.value))
  decksInput.value = ''
}

// const exampleCard1 = {
//   suit: 'Hearts',
//   value: 'Ace'
// }

// const exampleCard2 = {
//   suit:'Hearts',
//   value: '2'
// }

