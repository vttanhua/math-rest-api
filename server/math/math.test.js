const math = require('./math.service.js');

const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;

chai.config.includeStack = true;

const testNumber1 = 500;
const testNumber2 = 6.6;

//http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php 
//should be prime
const testNumber3 = 100010667737;
const testNumber4 = 1;
const testNumber5 = 0;
const testNumber6 = -100010667737;
const testNumberArray = [20,10,30];
const testNumberArray2 = [20,10,30,-10.1,12.5];

//TODO SOME ERROR CASES

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


  describe('# is Prime '+testNumber3, () => {
    it('Should return true', () => {
      expect(math.isPrime(testNumber3)).to.be.equal(true);
  })
});

describe('# is Prime '+testNumber4, () => {
    it('Should return false', () => {
      expect(math.isPrime(testNumber4)).to.be.equal(false);
  })
});

describe('# is Prime '+testNumber5, () => {
    it('Should return false', () => {
      expect(math.isPrime(testNumber5)).to.be.equal(false);
  })
});

describe('# is Prime '+testNumber6, () => {
    it('Should return false', () => {
      expect(math.isPrime(testNumber6)).to.be.equal(false);
  })
});
