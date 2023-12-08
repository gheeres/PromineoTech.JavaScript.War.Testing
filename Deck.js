const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Suits = require('./Suits');
const Faces = require('./Card').Faces;
const Card = require('./Card').Card;

// Deck {
//   ctor(cards);
// 
//   function draw();
//   function shuffle();
// 
//   function peek();
//   function toString();
// }

describe('Deck', () => {
  describe('#constructor', () => {
    it ('with empty constructor will create a deck with 52 cards', (done) => {
      /* Arrange */
      let expectedCards = 52;
    
      /* Act / Invoke */
      let deck = new Deck();
    
      /* Assert */
      expect(deck.peek()).to.have.lengthOf(expectedCards);
    
      done();
    });

    // it ('with empty constructor should initialize a standard deck', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('with array of cards, should initialize cards to provided values', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });
  });
  describe('#shuffle', () => {
    it ('with empty deck should not throw error', (done) => {
      /* Arrange */
      let deck = new Deck([]);
    
      /* Act / Invoke */
      /* Assert */
      deck.shuffle();
    
      done();
    });

    it ('with one card should remain unshuffled', (done) => {
      /* Arrange */
      let expectedCard = new Card('♣', 'J');
      let deck = new Deck([ expectedCard ]);
    
      /* Act / Invoke */
      deck.shuffle();
    
      /* Assert */
      let firstCardInDeck = deck.peek()[0];
      expect(firstCardInDeck).to.deep.equal(expectedCard);
    
      done();
    });

    // it ('should not remove or alter any existing cards in the deck', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });
    it ('with multiple cards should change position of at least one card', (done) => {
      /* Arrange */
      let expectedCards = [
        new Card('♠', 'A'), new Card('♠', '2'), new Card('♠', '3'), 
        new Card('♠', '4'), new Card('♠', '5'), new Card('♣', 'K'),
        new Card('♣', 'J'), new Card('♣', 'Q'), new Card('♣', '9'), 
        new Card('♦', '6'), new Card('♦', '7'), new Card('♣', '8'),
      ];
      let deck = new Deck(expectedCards);
    
      /* Act / Invoke */
      deck.shuffle();
    
      /* Assert */
      expect(deck.peek()).to.have.lengthOf(expectedCards.length);
      let changedPosition = false;
      deck.peek().forEach((card,index) => {
        if (expectedCards[index].toString() !== card.toString()) {
           changedPosition = true;
           return;
        }
      });
      expect(changedPosition).to.be.true;
    
      //console.log(deck.toString());

      done();
    });
  });
  describe('#draw', () => {
    // it ('with empty deck should return null', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('should return card at the top of the deck', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('should remove card from deck', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });
  });
});

/**
 * Represents a deck of cards that can be shuffled or drawn.
 */
class Deck {
  /**
   * The cards contained in the deck.
   */
  // code here, declare private variable. no one should be able to peek at the deck? cheater!
  #cards = [];

  /**
   * Creates a new instance of Desk.
   * @param {Card[]} cards The optional list of cards to initialize the deck with. Leaving this parameter null will automatically create a standard 52 card desk.
   */
  constructor(cards) {
    if (! cards) {
      this.#cards = this.#create();
    }
    else {
      this.#cards = [...cards];
    }
  }

  /**
   * Create or opens a brand new deck of cards.
   * @returns {Card[]} The freshly unwrapped deck
   */
  #create() {
    return [
      new Card('♠', 'A'), new Card('♠', '2'), new Card('♠', '3'), new Card('♠', '4'), new Card('♠', '5'), 
      new Card('♠', '6'), new Card('♠', '7'), new Card('♠', '8'), new Card('♠', '9'), new Card('♠', '10'), 
      new Card('♠', 'J'), new Card('♠', 'Q'), new Card('♠', 'K'),
      new Card('♥', 'A'), new Card('♥', '2'), new Card('♥', '3'), new Card('♥', '4'), new Card('♥', '5'), 
      new Card('♥', '6'), new Card('♥', '7'), new Card('♥', '8'), new Card('♥', '9'), new Card('♥', '10'), 
      new Card('♥', 'J'), new Card('♥', 'Q'), new Card('♥', 'K'),
      new Card('♣', 'A'), new Card('♣', '2'), new Card('♣', '3'), new Card('♣', '4'), new Card('♣', '5'), 
      new Card('♣', '6'), new Card('♣', '7'), new Card('♣', '8'), new Card('♣', '9'), new Card('♣', '10'), 
      new Card('♣', 'J'), new Card('♣', 'Q'), new Card('♣', 'K'),
      new Card('♦', 'A'), new Card('♦', '2'), new Card('♦', '3'), new Card('♦', '4'), new Card('♦', '5'), 
      new Card('♦', '6'), new Card('♦', '7'), new Card('♦', '8'), new Card('♦', '9'), new Card('♦', '10'), 
      new Card('♦', 'J'), new Card('♦', 'Q'), new Card('♦', 'K'),
    ];
  }

  /**
   * Shuffles the cards in the deck.
   */
  shuffle() {
    if (this.#cards) {
      this.#cards.forEach((card,index) => {
        let position = Math.floor(Math.random() * this.#cards.length);
        // Swap card position
        if (position !== index) {
          let cardToSwap = this.#cards[position]; // Grab a reference to the card we are going to swap
          this.#cards[position] = card; // Put our card in the spot where the card to be swapped is/was
          this.#cards[index] = cardToSwap;
        }
      });
    }
  }

  /**
   * Allows for the entire desk of cards to be inspected or viewed.
   * @returns {Card[]} The current cards contained in the deck.
   */
  peek() {
    return this.#cards;
  }

  /**
   * Removes the card from the top of the deck. If no cards are available, then null is returned.
   * @returns {Card} The card at the top of the deck, otherwise returns null.
   */
  draw() {
    /* code here */
  }

  /**
   * Returns the string representation of the object.
   * @returns {String} The string representation of the object
   */
   toString() {
    //let output = '';
    //for(let card of this.#cards) {
    //  output += `,${ card.toString() }`;
    //}
    //return output;
    return this.#cards.join(',');
  }
}

module.exports = Deck;