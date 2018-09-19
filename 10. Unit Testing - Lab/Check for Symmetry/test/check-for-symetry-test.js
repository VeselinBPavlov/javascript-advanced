let isSymmetric = require('../check-for-symetry').isSymmetric;
let expect = require('chai').expect;

describe('Is array symmetric', function () {
    it('Should return false "test"', function () {
        expect(isSymmetric('test')).to.be.equal(false);
    });
    it('Should return true [1, 2, 3, 2, 1]', function () {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.equal(true);
    });
    it('Should return true [1, 2, 2, 1]', function () {
        expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
    });
    it('Should return true [1]', function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it('Should return false [1, 2, 3, 4, 5]', function () {
        expect(isSymmetric([1, 2, 3, 4, 5])).to.be.equal(false);
    });
    it('Should return false [1, 2, 3, 4]', function () {
        expect(isSymmetric([1, 2, 3, 4])).to.be.equal(false);
    });
    it('Should return false []', function () {
        expect(isSymmetric([])).to.be.equal(true);
    });
    it('Should return false(["2",2])', () => {
        expect(isSymmetric(["2", 2])).to.be.false;
    });
});