let Sumator = require('../sumator-class');
let expect = require('chai').expect;

describe('Summator', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });

    // Return True.
    it('Should return true', function () {
        expect(sumator instanceof Sumator).to.equal(true);
    });
    it('Should return true', function () {
        expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
    });

    // Return 'Function'.
    it('Should return function', function () {
        expect(typeof sumator.add).to.equal('function');
        expect(typeof sumator.sumNums).to.equal('function');
        expect(typeof sumator.removeByFilter).to.equal('function');
        expect(typeof sumator.toString).to.equal('function');
    });

    // Constructor test.
    it('Should return result', function () {
        expect(sumator.data instanceof Array).to.be.equal(true);
        expect(sumator.data.length).to.be.equal(0);
    });

    // Add function test
    it('Should return result', function () {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        expect(sumator.data.join(', ')).to.be.equal('5, 4, 3');
    });
    it('Should return result', function () {
        sumator.add('Ivan');
        sumator.add(5);
        expect(sumator.toString()).to.be.equal("Ivan, 5");
    });

    // Sum function test
    it('Should return result', function () {
        sumator.add(5);
        sumator.add(4);
        sumator.add(3);
        expect(sumator.sumNums()).to.be.equal(12);
    });
    it('Should return result', function () {
        sumator.add(5);
        sumator.add("Ivan");
        sumator.add(3);
        expect(sumator.sumNums()).to.be.equal(8);
    });
    it('correctly filters non-numbers when summing', function () {
        expect(sumator.sumNums()).to.equal(0);
    });

    // Remove by filter func.
    it('Should return result', function () {
        sumator.add(5);
        sumator.add("Ivan");
        sumator.add(3);
        sumator.add(2);
        sumator.removeByFilter((x) => x % 2 === 1);
        expect(sumator.toString()).to.be.equal('Ivan, 2');
    });
    it('Should return result', function () {
        sumator.add(5);
        expect(() => sumator.removeByFilter(undefined)).to.throw(Error);
    });

    // To String func.
    it('Should return result', function () {
        expect(sumator.toString()).to.be.equal('(empty)');
    });
});

/* Test if data array is empty.
    -add func
    --add only numbers
    --add only strings
    --add mixed types
    -sumNums func
    --sum with numbers
    --sum with mixed types
    --sum with empty array
    -removeByFilter func
    --removes items
    -- removes nothing
    -toString func
    --array has items
    --array is empty
 */