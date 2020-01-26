const math = require('./math.service.js');

const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;

chai.config.includeStack = true;

const testNumber1=500;
const testNumber2=6.6;
const testNumberArray = [20,10,30];
const testNumberArray2 = [20,10,30,-10.1,12.5];

  describe('# calculate sum of '+testNumberArray, () => {
    it('Should return 60', () => {
      expect(math.calculateSum(testNumberArray)).to.be.equal(60);
  })
});

  describe('# calculate sum of '+testNumberArray2, () => {
    it('Should return 62.4', () => {
      expect(math.calculateSum(testNumberArray2)).to.be.equal(62.4);
  })
});  

  describe('# is Prime '+testNumber1, () => {
    it('Should return false', () => {
      expect(math.isPrime(testNumber1)).to.be.equal(false);
  })
});

  describe('# is Prime '+testNumber2, () => {
    it('Should return false', () => {
      expect(math.isPrime(testNumber2)).to.be.equal(false);
  })
});

    describe("Start to test function A", function(){
    it("should return 2 when we pass 1 and 1", function(){
        expect(math.addTwo(1, 1)).to.be.equal(2)
    });
});