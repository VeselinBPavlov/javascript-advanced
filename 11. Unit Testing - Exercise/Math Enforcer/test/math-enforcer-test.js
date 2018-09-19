let mathEnforcer = require('../math-enforcer').mathEnforcer;
let expect = require('chai').expect;

describe("Math Enforcer", function () {
   describe("Add Five", function () {
        it('Should return undefined from ("5")', function () {
            expect(mathEnforcer.addFive("5")).to.equal(undefined);
        });
        it('Should return 10 from (5)', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
       it('Should return 0 from (-5)', function () {
           expect(mathEnforcer.addFive(-5)).to.equal(0);
       });
       it('Should return 5.23 from (0.23)', function () {
           expect(mathEnforcer.addFive(0.23)).to.equal(5.23);
       });
    });

    describe("Subtract Ten", function () {
        it('Should return undefined from ("5")', function () {
            expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
        });
        it('Should return 10 from (20)', function () {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('Should return -20 from (-10)', function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('Should return 10.50 from (20.50)', function () {
            expect(mathEnforcer.subtractTen(20.50)).to.equal(10.50);
        });
    });

    describe("Sum Numbers", function () {
        it('Should return undefined from ("5", 5)', function () {
            expect(mathEnforcer.sum("5", 5)).to.equal(undefined);
        });
        it('Should return undefined from (5, "5")', function () {
            expect(mathEnforcer.sum(5, "5")).to.equal(undefined);
        });
        it('Should return 10 from (5, 5)', function () {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });
        it('Should return 0 from (5, -5)', function () {
            expect(mathEnforcer.sum(5, -5)).to.equal(0);
        });
        it('Should return 10.24 from (5.12, 5.12)', function () {
            expect(mathEnforcer.sum(5.12, 5.12)).to.equal(10.24);
        });
    });
});