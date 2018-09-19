let createList = require('../add-swap-shift-list');
let expect = require('chai').expect;

describe("Add/Swap/Shift List", function() {
    let list;
    beforeEach(function () {
        list = createList();
    });

    describe("Check properties", function () {
        it('Should return true', function () {
            expect(typeof list.add).to.equal('function');
            expect(typeof list.shiftLeft).to.equal('function');
            expect(typeof list.shiftRight).to.equal('function');
            expect(typeof list.swap).to.equal('function');
            expect(typeof list.toString).to.equal('function');
        });
    });

    describe("Check functions", function () {
        it('Add', function () {
            list.add('Pesho');
            expect(list.toString()).to.equal('Pesho');
            list.add({name: 'Pesho'});
            expect(list.toString()).to.equal('Pesho, [object Object]');
            list.add(5);
            expect(list.toString()).to.equal('Pesho, [object Object], 5');
        });

        it('Shift Left', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.add('Richi');
            list.shiftLeft();
            expect(list.toString()).to.equal('Gosho, Richi, Pesho');
        });

        it('Shift Right', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.add('Richi');
            list.shiftRight();
            expect(list.toString()).to.equal('Richi, Pesho, Gosho');
        });

        it('Swap', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.add('Richi');
            list.swap(0, 1);
            expect(list.toString()).to.equal('Gosho, Pesho, Richi');
            expect(list.swap(0, 1)).to.equal(true);
            expect(list.toString()).to.equal('Pesho, Gosho, Richi');
            expect(list.swap(1, 0)).to.equal(true);
            expect(list.toString()).to.equal('Gosho, Pesho, Richi');
            expect(list.swap(1, 2)).to.equal(true);
            expect(list.toString()).to.equal('Gosho, Richi, Pesho');
            expect(list.swap(2, 1)).to.equal(true);
            expect(list.toString()).to.equal('Gosho, Pesho, Richi');
        });

        it('Swap', function () {
            list.add('Pesho');
            list.add('Gosho');
            list.add('Richi');
            expect(list.swap(0, "Pesho")).to.equal(false);
            expect(list.swap(0, 1.1)).to.equal(false);
            expect(list.swap(0, [1, 2])).to.equal(false);
            expect(list.swap(0, -1)).to.equal(false);
            expect(list.swap(0, 10)).to.equal(false);

            expect(list.swap("Pesho", 2)).to.equal(false);
            expect(list.swap(1.1, 2)).to.equal(false);
            expect(list.swap([1, 2], 0)).to.equal(false);
            expect(list.swap(10, 2)).to.equal(false);
            expect(list.swap(-1, 2)).to.equal(false);

            expect(list.swap('Pesho', 'Gosho')).to.equal(false);
            expect(list.swap(0, 0)).to.equal(false);
            expect(list.toString()).to.equal('Pesho, Gosho, Richi');
        });

        it('toString', function () {
            expect(list.toString()).to.equal('');
        });
    });
});
