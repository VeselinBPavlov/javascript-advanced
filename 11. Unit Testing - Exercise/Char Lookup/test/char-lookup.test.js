let lookupChar = require('../char-lookup').lookupChar;
let expect = require('chai').expect;

describe('Find char in string', function () {
    // Return undefined.
    it('Should return undefined from (2, 2)', function () {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });

    it('Should return undefined from ("test", "2")', function () {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });

    it('Should return undefined from ("test", 1.23)', function () {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    });

    // Return Incorrect index.html.
    it('Should return Incorrect index from ("test", 25)', function () {
        expect(lookupChar("test", 25)).to.equal('Incorrect index');
    });
    it('Should return Incorrect index from ("hello", -4)', function () {
        expect(lookupChar("hello", -4)).to.equal('Incorrect index');
    });
    it('Should return Incorrect index from ("hello", 5)', function () {
        expect(lookupChar("hello", 5)).to.equal('Incorrect index');
    });

    // Return char from string.
    it('Should return "o" from ("hello", 4)', function () {
        expect(lookupChar("hello", 0)).to.equal('o');
    });
    it('Should return "l" from ("hello", 3)', function () {
        expect(lookupChar("hello", 3)).to.equal('l');
    });
});