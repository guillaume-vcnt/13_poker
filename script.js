//13_poker

const heart = ["1as♡", "2♡", "3♡", "4♡", "5♡", "6♡", "7♡", "8♡", "9♡", "10♡", "J♡", "Q♡", "K♡"];
const diamond = ["1as♢", "2♢", "3♢", "4♢", "5♢", "6♢", "7♢", "8♢", "9♢", "10♢", "J♢", "Q♢", "K♢"];
const spade = ["1as♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠"];
const club = ["1as♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣"];

function concatDeck() {
  const concatenedDeck = heart.concat(diamond, spade, club);
  return concatenedDeck;
}

// function qui mélange les cartes du deck avec Fisher-Yates Algorith
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

concatDeck();
const deck = concatDeck();
// console.log(deck);

shuffleCards(deck);
const shuffledDeck = shuffleCards(deck);
// console.log(shuffledDeck);

// function qui retire un nombre de cartes du shuffledDeck avec .splice()
function deal(nbCard) {
  const dealDeck = shuffledDeck.splice(0, nbCard);
    // console.log(dealDeck);
    // console.log(shuffledDeck);
  return dealDeck;
}

const player1 = deal(2);
// console.log(player1);
const player2 = deal(2);
// console.log(player2);

function flop() {
  let firstRound = deal(4);
  firstRound.splice(0, 1);
  let secondRound = deal(2);
  secondRound.splice(0, 1);
  let thirdRound = deal(2);
  thirdRound.splice(0, 1);
  const flopDeck = firstRound.concat(secondRound, thirdRound);
  return flopDeck;
}

let cards = flop();
console.log(cards);