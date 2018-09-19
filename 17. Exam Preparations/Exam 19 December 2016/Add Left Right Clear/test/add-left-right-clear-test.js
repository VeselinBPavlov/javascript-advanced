let makeList = require('../add-left-right-clear');
let expect = require('chai').expect;

describe("Add Left/Right Clear", function() {
    let myList;
    beforeEach(function () {
        myList = makeList();
    });
    describe('Test properties existing', function () {
        it('Function type', function () {
            expect(typeof myList.addLeft).to.equal('function');
            expect(typeof myList.addRight).to.equal('function');
            expect(typeof myList.clear).to.equal('function');
            expect(typeof myList.toString).to.equal('function');
        });
    });
    describe("Test functionality", function () {
        it('Add Left', function () {
            myList.addLeft('item');
            expect(myList.toString()).to.equal('item');
            myList.addLeft(2);
            expect(myList.toString()).to.equal('2, item');
        });
        it('Add right', function () {
            myList.addRight('item');
            expect(myList.toString()).to.equal('item');
            myList.addRight(2);
            expect(myList.toString()).to.equal('item, 2');
        });
        it('Clear', function () {
            myList.addRight('item');
            myList.addLeft(2);
            myList.addRight(3.14);
            myList.addLeft(-10);
            expect(myList.toString()).to.equal('-10, 2, item, 3.14');
            myList.clear();
            expect(myList.toString()).to.equal('');
            myList.addLeft(-10);
            expect(myList.toString()).to.equal('-10');
        });
    });
});
