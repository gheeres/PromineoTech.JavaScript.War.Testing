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
    //it ('with empty constructor will create a deck with 52 cards', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //});

    // it ('with empty constructor should initialize a standard deck', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with array of cards, should initialize cards to provided values', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });
  });
  describe('#shuffle', () => {
    // it ('with empty deck should not throw error', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with one card should remain unshuffled', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('should not remove or alter any existing cards in the deck', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with multiple cards should change position of at least one card', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });
  });
  describe('#draw', () => {
    // it ('with empty deck should return null', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('should return card at the top of the deck', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('should remove card from deck', () => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
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

  /**
   * Creates a new instance of Desk.
   * @param {Card[]} cards The optional list of cards to initialize the deck with. Leaving this parameter null will automatically create a standard 52 card desk.
   */
  constructor(cards) {
    /* code here */
  }

  /**
   * Create or opens a brand new deck of cards.
   * @returns {Card[]} The freshly unwrapped deck
   */
  #create() {
    /* code here */
  }

  /**
   * Shuffles the cards in the deck.
   */
  shuffle() {
    /* code here */
  }

  /**
   * Allows for the entire desk of cards to be inspected or viewed.
   * @returns {Card[]} The current cards contained in the deck.
   */
  peek() {
    /* code here */
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
    /* code here */
  }
}

module.exports = Deck;