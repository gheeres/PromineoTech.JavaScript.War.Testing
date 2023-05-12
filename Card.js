const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Suits = require('./Suits');
const Faces = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];

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
    
       /* Act / Invoke */
       let card = new Card('♠', 'A');
    
       /* Assert */
       expect(card.suit).to.equal('♠');
       expect(card.face).to.equal('A');

       done();
    });

    it ('should throw Error if no parameters provided', (done) => {
       expect(() => {
         let card = new Card();
       }).to.throw(Error);
       done();
    });

    it ('should throw Error if suit is not valid', (done) => {
      expect(() => {
        let card = new Card('o', 'A');
      }).to.throw(Error);
      done();
    });

    it ('should throw Error if face is not valid', (done) => {
      expect(() => {
        let card = new Card('♠', 'B');
      }).to.throw(Error);
      done();
    });
  });

  describe('#toString', () => {
    it ('should return suit and card face', (done) => {
       /* Arrange */
       let suit = Suits[0];
       let face = 'A';
       let expectedString = suit + face;
    
       /* Act / Invoke */
       let card = new Card(suit, face);
    
       /* Assert */
       expect(card.toString()).to.equal(expectedString);
       
       done();
    });
  });
  describe('#getValue', () => {
    it ('with ♠A should return 1', (done) => {
      /* Arrange */
      let suit = Suits[0];
      let face = 'A';
      let expectedValue = 1;
      let card = new Card(suit, face);
    
      /* Act / Invoke */
      let result = card.getValue();
    
       /* Assert */
       expect(result).to.equal(expectedValue);
       
       done();
    });

    it ('with ♠Q should return 10', (done) => {
      /* Arrange */
      let suit = Suits[0];
      let face = 'Q';
      let expectedValue = 10;
      let card = new Card(suit, face);
    
      /* Act / Invoke */
      let result = card.getValue();
    
       /* Assert */
       expect(result).to.equal(expectedValue);

       done();
     });

    it ('with ♠K should return 10', (done) => {
      /* Arrange */
      let suit = Suits[0];
      let face = 'K';
      let expectedValue = 10;
      let card = new Card(suit, face);
    
      /* Act / Invoke */
      let result = card.getValue();
    
       /* Assert */
       expect(result).to.equal(expectedValue);

       done();    });

    it ('with ♠10 should return 10', (done) => {
      /* Arrange */
      let suit = Suits[0];
      let face = '10';
      let expectedValue = 10;
      let card = new Card(suit, face);
    
      /* Act / Invoke */
      let result = card.getValue();
    
       /* Assert */
       expect(result).to.equal(expectedValue);

       done();    
    });

    it ('with ♠2 should return 2', (done) => {
      /* Arrange */
      let suit = Suits[0];
      let face = '2';
      let expectedValue = 2;
      let card = new Card(suit, face);
    
      /* Act / Invoke */
      let result = card.getValue();
    
       /* Assert */
       expect(result).to.equal(expectedValue);

       done();
    });

    it ('with ♠7 should return 7', (done) => {
      /* Arrange */
      let suit = Suits[0];
      let face = '7';
      let expectedValue = 7;
      let card = new Card(suit, face);
    
      /* Act / Invoke */
      let result = card.getValue();
    
       /* Assert */
       expect(result).to.equal(expectedValue);

       done();
    });
  });
});

/**
 * Represents a standard playing card.
 */
class Card {
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
      throw new Error(`Invalid face specified. Valid values are: ${ Faces.join(',') }`);
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
      case 'A': return 1;
      case 'K':
      case 'Q': 
      case 'J': return 10;

      default: 
        let value = parseInt(this.face, 10);
        if (value) {
          return value;
        }
        return 0;
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

module.exports = {
  Card : Card,
  Faces : Faces
};