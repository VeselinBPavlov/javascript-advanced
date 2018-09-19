let isOddOrEven = require('../even-odd').isOddOrEven;
let expect = require('chai').expect;

describe('Is the number even or odd', function () {
    // Return undefined.
    it('Should be undefined (1)', function () {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
    it('Should be undefined ({})', function () {
        expect(isOddOrEven({})).to.be.equal(undefined);
    });
    it('Should be undefined (1)', function () {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });

    // Return odd.
    it('Should be odd ("sss")', function () {
        expect(isOddOrEven('sss')).to.be.equal('odd');
    });

    // Return even.
    it('Should be even ("ss")', function () {
        expect(isOddOrEven('ss')).to.be.equal('even');
    });
    it('Should be even ("")', function () {
        expect(isOddOrEven('')).to.be.equal('even');
    });
});

