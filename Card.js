let chai = (typeof(window) === 'undefined') ? await import('./node_modules/chai/index.mjs') : window.chai;
const expect = chai.expect;

import Suits from './Suits.js';
export const Faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];

// Card {
//   property suit;
//   property face;  
//
//   ctor(suit, face);
// 
//   function getValue();
//   function toString();
// }

describe('Card', () => {
  describe('#constructor', () => {
    it ('should take a suit and value', (done) => {
      /* Arrange */
      let expectedFace = 'A';
      let expectedSuit = '♠';
    
      /* Act / Invoke */
      let card = new Card(expectedSuit, expectedFace);
    
      /* Assert */
      expect(card.suit).to.equal(expectedSuit);
      expect(card.face).to.equal(expectedFace);
    
      done();
    });

    it ('should throw Error if no parameters provided', (done) => {
      /* Assert */
      expect((done) => {
        /* Arrange */

        /* Act / Invoke */
        let card = new Card();
      }).to.throw(Error);
    
      done();
    });

    it ('should throw Error if suit is not valid', (done) => {
      /* Assert */
      expect((done) => {
        /* Arrange */
  
        /* Act / Invoke */
        let card = new Card('B', 'K');
      }).to.throw(Error);
    
      done();
    });

    it ('should throw Error if face is not valid', (done) => {
      /* Assert */
      expect((done) => {
        /* Arrange */
    
        /* Act / Invoke */
        new Card(Suits[0], 'G');
      }).to.throw(Error);
    
      done();
    });
  });
  describe('#toString', () => {
    it ('should return suit and card face', (done) => {
      /* Arrange */
      let suit = '♥'; // Suits[0]
      let face = 'A';
      let expected = suit + face; // ♥A
      let card = new Card(suit, face);
    1
      /* Act / Invoke */
      let actual = card.toString();
    
      /* Assert */
      expect(actual).to.equal(expected);
    
      done();
    });
  });
  describe('#getValue', () => {
    it ('with ♠A should return 1', (done) => {
      /* Arrange */
      let suit = '♠';
      let face = 'A';
      let card = new Card(suit, face);
      let expected = 1;
    
      /* Act / Invoke */
      let actual = card.getValue();
    
      /* Assert */
      expect(actual).to.equal(expected);
    
      done();
    });

    it ('with ♠Q should return 10', (done) => {
      /* Arrange */
      let suit = '♠';
      let face = 'Q';
      let card = new Card(suit, face);
      let expected = 10;
    
      /* Act / Invoke */
      let actual = card.getValue();
    
      /* Assert */
      expect(actual).to.equal(expected);
    
      done();
    });

    it ('with ♠K should return 10', (done) => {
      /* Arrange */
      let suit = '♠';
      let face = 'K';
      let card = new Card(suit, face);
      let expected = 10;
    
      /* Act / Invoke */
      let actual = card.getValue();
    
      /* Assert */
      expect(actual).to.equal(expected);
    
      done();
    });

    it ('with ♠10 should return 10', (done) => {
      /* Arrange */
      let suit = '♠';
      let face = '10';
      let card = new Card(suit, face);
      let expected = 10;
    
      /* Act / Invoke */
      let actual = card.getValue();
    
      /* Assert */
      expect(actual).to.equal(expected);
    
      done();
    });

    it ('with ♠2 should return 2', (done) => {
      /* Arrange */
      let suit = '♠';
      let face = '2';
      let card = new Card(suit, face);
      let expected = 2;
    
      /* Act / Invoke */
      let actual = card.getValue();
    
      /* Assert */
      expect(actual).to.equal(expected);
    
      done();
    });

    it ('with ♠7 should return 7', (done) => {
      /* Arrange */
      let suit = '♠';
      let face = '7';
      let card = new Card(suit, face);
      let expected = 7;
    
      /* Act / Invoke */
      let actual = card.getValue();
    
      /* Assert */
      expect(actual).to.equal(expected);
    
      done();
    });
  });
});

/**
 * Represents a standard playing card.
 */
export class Card {
  /**
   * Creates a new player card.
   * @param {String} suit The suit of the card. Accepted values: '♠', '♥', '♣', '♦'
   * @param {String} face The face or value of the card. Accepted values: 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
   */
  constructor(suit, face) {
    if (Suits.indexOf(suit) < 0) {
      throw new Error(`Invalid suit specified. Valid values are: ${ Suits.join(',') }`);
    }
    if (Faces.indexOf(face) < 0) {
      throw new Error(`Invalid card/face specified. Valid values are: ${ Faces.join(',') }`);
    }
    this.suit = suit;
    this.face = face;
  }

  /**
   * Calculates the value of the specified card.
   * @returns The value of the specified card.
   */
  getValue() {
    switch(this.face) {
      case 'A':
        return 1;
      case 'J': 
      case 'Q': 
      case 'K': 
        return 10;  
      default:
        let value = parseInt(this.face, 10);
        if (value) {
          return value;
        }
        return 0; // This should never happen...
    }
  }

  /**
   * Returns the string representation of the object.
   * @returns {String} The string representation of the object
   */
  toString() {
    return `${ this.suit }${ this.face }`;
  }
}

export default {
  Card : Card,
  Faces : Faces
};
