const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Card = require('./Card');
const Deck = require('./Deck');

// Player {
//   ctor(name, hand);
// 
//   function flip();
//   function add();
//   function drawCardFromDeck();
// 
//   function hand();
//   function toString();
// }

describe('Player', () => {
  describe('#constructor', () => {
    //it ('with empty constructor will throw Error', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //});

    // it ('with name sets name property', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with cards will initialize hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });
  });
  describe('#flip', () => {
    // it ('with empty hand should return null', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('should return first card from the players hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('should remove card from players hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });
  });
  describe('#add', () => {
    // it ('with null card returns existing hand count', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with valid card adds card to hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with empty hand adds card to hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });
    // it ('with non-Card object/instance doesnt add card to hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });
  });
  describe('#drawCardFromDeck', () => {
    // it ('with empty deck returns false', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with non-Deck object/instance returns false', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with valid deck and empty hand adds drawn card to players hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    // });

    // it ('with valid deck and existing hand adds drawn card to players hand', (done) => {
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
 * Represents a card player.
 */
class Player {
  /**
   * The cards in the players hand.
   */
  // code here, declare private variable. no one should be able to peek at my cards!

  /**
   * Creates an instance of the Player class.
   * @param {String} name The name of the player.
   * @param {Card[]} cards The optional list of cards to put into the players hand. If not specified, then player has an empty hand.
   */
  constructor(name, cards) {
    /* code here */
  }

  /**
   * Returns the cards currently in the players hand.
   * @returns {Card[]} The cards currently in the players hand.
   */
  hand() {
    /* code here */
  }

  /**
   * Returns the first card in the players hand. Once flipped, the card is removed from the players hand.
   * @returns {Card} The current.
   */
  flip() {
    /* code here */
  }

  /**
   * Adds the specified card to the players hand.
   * @param {Card} card The card to add.
   * @returns {Number} The number of cards in the players hand.
   */
  add(card) {
    /* code here */
  }

  /**
   * Draws a card from the deck and adds it to the users hand.
   * @param {Deck} deck The deck to draw the card from.
   * @returns {Boolean} True if a card was drawn, false if otherwise.
   */
   drawCardFromDeck(deck) {
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

module.exports = Player;