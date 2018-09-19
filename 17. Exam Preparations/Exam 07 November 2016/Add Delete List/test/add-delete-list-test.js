let list = require('../add-delete-list');
let expect = require('chai').expect;

describe("Add/Delete in List", function() {
    describe('Check properties', function () {
        it('Function type', function () {
            expect(typeof list).to.equal('object');
            expect(typeof list.add).to.equal('function');
            expect(typeof list.delete).to.equal('function');
            expect(typeof list.toString).to.equal('function');
        });
    });
    describe('Test Functions', function () {
        it('Test add', function () {
            list.add('Pesho');
            expect(list.toString()).to.equal('Pesho');
            list.add(2);
            expect(list.toString()).to.equal('Pesho, 2');
        });
        it('Test delete', function () {
            beforeEach(function () {
                list.add('Pesho');
                list.add('Slavi');
                list.add('Grisho');
                list.add('Bobi');
            });
            expect(list.delete("Mara")).to.equal(undefined);
            expect(list.delete(-1)).to.equal(undefined);
            expect(list.delete(1.3)).to.equal(undefined);
            expect(list.delete(30)).to.equal(undefined);
            expect(list.delete(4)).to.equal(undefined);
        });
        it('Test delete', function () {
            expect(list.delete(0)).to.equal("Pesho");
        });
        it('Test delete', function () {
            expect(list.delete(2)).to.equal("Slavi");
        });
        it('Test delete', function () {
            expect(list.delete(3)).to.equal("Bobi");
        });
    });
});
