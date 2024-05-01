let chai = (typeof(window) === 'undefined') ? await import('./node_modules/chai/index.mjs') : window.chai;
const expect = chai.expect;

describe('Suits', () => {
  describe('#array', () => {
    it('should contain four values', (done) => {
      /* Arrange */
      /* Act / Invoke */
      /* Assert */
      expect(Suits.length).to.equal(4);

      done();
    });
    it('should contain "♠"', (done) => {
      /* Arrange */
      let expectedSuit = '♠';
      
      /* Act / Invoke */
      /* Assert */
      expect(Suits).to.contain(expectedSuit);

      done();
    });
    it('should contain "♥"', (done) => {
      /* Arrange */
      let expectedSuit = '♥';
      
      /* Act / Invoke */
      /* Assert */
      expect(Suits).to.contain(expectedSuit);

      done();
    });
    it('should contain "♣"', (done) => {
      /* Arrange */
      let expectedSuit = '♣';
      
      /* Act / Invoke */
      /* Assert */
      expect(Suits).to.contain(expectedSuit);

      done();
    });
    it('should contain "♦"', (done) => {
      /* Arrange */
      let expectedSuit = '♦';
      
      /* Act / Invoke */
      /* Assert */
      expect(Suits).to.contain(expectedSuit);

      done();
    });
  });
});

const Suits = [ '♠', '♥', '♣', '♦', ];
//const Suits = ['\u2666', '\u2665', '\u2666', '\u2663'];

export default Suits;
