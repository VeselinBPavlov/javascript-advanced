let Calculator = require("../function");
let expect = require('chai').expect;

describe('Calculator class Unit testing', function () {
    let calc;
    beforeEach(function () {
        calc = new Calculator();
    });
    it('Testing if Calculator has all needed properties.', function () {
        expect(calc.hasOwnProperty('expenses')).to.equals(true);
        expect(calc.expenses).to.be.an('array');
        expect(typeof calc.add).to.equals('function');
        expect(typeof calc.divideNums).to.equals('function');
        expect(typeof calc.toString).to.equals('function');
        expect(typeof calc.orderBy).to.equals('function');
    });

    it(`Testing if Calculator's array length is increasing.`, function () {
        calc.add(5);
        calc.add(-32);
        calc.add('asd');
        calc.add({asd: 1});
        expect(calc.expenses).to.have.lengthOf(4);
    });
    it('Testing if Calculator.divideNums works with positive, negative and floating-point numbers.Testing if can divide by zero.', function () {
        calc.add(6);
        calc.add(-2.5);
        expect(calc.divideNums()).to.equals(-2.4);
        calc.add(0);
        expect(calc.divideNums()).to.equals('Cannot divide by zero');

    });
    it('Testing if Calculator.devideNums throw errors currectly.', function () {
        expect(() => calc.divideNums()).to.throw('There are no numbers in the array!');
        calc.add({a:1});
        calc.add('asd');
        expect(() => calc.divideNums()).to.throw('There are no numbers in the array!');
    });

    it('Testing if Calculator.toString works correctly with all input types.', function () {
        expect(calc.toString()).to.equals('empty array');
        calc.add('asd');
        calc.add(2);
        calc.add(-2);
        calc.add(3.14);
        calc.add({a:'s'});
        expect(calc.toString()).to.equals('asd -> 2 -> -2 -> 3.14 -> [object Object]');
    });

    it('Testing if Calculator.orderBy works correctly with all input types.', function () {
        expect(calc.orderBy()).to.equals('empty');
        calc.add(3.14);
        calc.add(2);
        calc.add(-1);
        calc.add(2.13);
        expect(calc.orderBy()).to.equals('-1, 2, 2.13, 3.14');
        calc.add('asd');
        calc.add([1,2,3]);
        calc.add({qwe:'gosho'});
        expect(calc.orderBy()).to.equals('-1, 1,2,3, 2, 2.13, 3.14, [object Object], asd');
    });

})