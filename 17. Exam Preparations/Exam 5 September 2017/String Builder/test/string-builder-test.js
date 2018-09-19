let StringBuilder = require('../string-builder');
let expect = require('chai').expect;

describe("String Builder", function() {
    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder();
    });

    describe('Check properties', function () {
        it('Should return true', function () {
            expect(stringBuilder.hasOwnProperty('_stringArray')).to.equal(true);
        });

        it('Should return true', function () {
            expect(stringBuilder._stringArray instanceof Array).to.be.equal(true);
            expect(stringBuilder._stringArray.length).to.be.equal(0);
        });

        it('Should return true', function () {
            stringBuilder._stringArray = 'Pesho';
            expect(stringBuilder._stringArray).to.be.equal('Pesho');
        });

        it('Should return true', function () {
            expect(stringBuilder instanceof StringBuilder).to.equal(true);
        });

        it('Should return true', function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.equal(true);
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.equal(true);
        });

        it('Should return function', function () {
            expect(typeof stringBuilder.append).to.equal('function');
            expect(typeof stringBuilder.prepend).to.equal('function');
            expect(typeof stringBuilder.insertAt).to.equal('function');
            expect(typeof stringBuilder.remove).to.equal('function');
            expect(typeof stringBuilder.toString).to.equal('function');
        });
    });

    describe("Check input parameters", function () {
        it('Should not throw error', function () {
            let empty = () => stringBuilder = new StringBuilder();
            expect(empty).to.not.throw();
            let notEmptyString = () => stringBuilder = new StringBuilder('hello');
            expect(notEmptyString).to.not.throw();
        });

        it('Should throw an error', function () {
            let notString = () => stringBuilder = new StringBuilder(5);
            expect(notString).to.throw();
        });
    });

    describe("Check functions", function () {
        it('Append', function () {
            stringBuilder.append('Pesho');
            expect(stringBuilder.toString()).to.equal('Pesho');
            stringBuilder.append(', Gosho');
            expect(stringBuilder.toString()).to.equal('Pesho, Gosho');
            expect(stringBuilder._stringArray.length).to.be.equal(12);
        });
        it('Append error', function () {
            expect(() =>{stringBuilder.append(5)}).to.throw(TypeError);
        });

        it('Prepend', function () {
            stringBuilder.prepend(', Pesho');
            expect(stringBuilder.toString()).to.equal(', Pesho');
            stringBuilder.prepend('Gosho');
            expect(stringBuilder.toString()).to.equal('Gosho, Pesho');
        });
        it('Prepend error', function () {
            expect(() =>{stringBuilder.prepend(5)}).to.throw(TypeError);
        });

        it('InsertAt', function () {
            stringBuilder.append('Pesho');
            stringBuilder.insertAt('V', 4);
            expect(stringBuilder.toString()).to.equal('PeshVo');
            stringBuilder.insertAt("Baba", 0);
            expect(stringBuilder.toString()).to.equal('BabaPeshVo');
            stringBuilder.insertAt("Baba", 11);
            expect(stringBuilder.toString()).to.equal('BabaPeshVoBaba');
        });

        it('InsertAt Error', function () {
            stringBuilder.append('Pesho');
            expect(() =>{stringBuilder.insertAt(5, 5)}).to.throw(TypeError);
        });

        it('Remove', function () {
            stringBuilder.append(', Pesho');
            stringBuilder.remove(0, 2);
            expect(stringBuilder.toString()).to.equal('Pesho');
        });

        it('To String', function () {
            expect(stringBuilder.toString()).to.be.equal('');
        });
    });
});

