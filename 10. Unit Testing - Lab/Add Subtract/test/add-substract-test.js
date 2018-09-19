let createCalculator = require('../add-substract').createCalculator;
let expect = require('chai').expect;

describe("Calculator", function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('Should return 0', function () {
        expect(calc.get()).to.be.equal(0);
    });
    it('Should return 10', function () {
        calc.add(10);
        expect(calc.get()).to.be.equal(10);
    });
    it('Should return -10', function () {
        calc.subtract(10);
        expect(calc.get()).to.be.equal(-10);
    });
    it('Should return -10', function () {
        calc.add(-10);
        expect(calc.get()).to.be.equal(-10);
    });
    it('Should return 1.5 - 18 ', function () {
        calc.subtract(18);
        calc.add(1.5);
        expect(calc.get()).to.equal(1.5 - 18);
    });
    it('Should return NaN', function () {
        calc.subtract('test');
        expect(calc.get()).to.be.NaN;
    });
    it('Should return NaN', function () {
        calc.add('test');
        expect(calc.get()).to.be.NaN;
    });
    it('Should return NaN', function () {
        calc.subtract();
        expect(calc.get()).to.be.NaN;
    });
    it('Should return NaN', function () {
        calc.add();
        expect(calc.get()).to.be.NaN;
    });
    it('Should return 0', function () {
        calc.add([]);
        expect(calc.get()).to.be.equal(0);
    });
    it('Should return NaN', function () {
        calc.add({});
        expect(calc.get()).to.be.NaN;
    });
});