let sharedObject = require('../shared-object').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
$ = require('jquery');

describe('Test cases', function () {
    let testObject;
    beforeEach('Init the object', function () {
        testObject = Object.create(sharedObject);
        document.body.innerHTML =
            `<div id="wrapper">
                <input type="text" id="name">
                <input type="text" id="income">
            </div>`;
    });

    describe('Validate initial state', function () {
        it('Should be object', function () {
            expect(testObject).to.an('object');
        });

        it('Should return null on testObject.name', function () {
            expect(testObject.name).to.equal(null);
        });

        it('Should return null on testObject.income', function () {
            expect(testObject.income).to.equal(null);
        });

        it('Should return null on testObject.income', function () {
            expect(testObject.income).to.equal(null);
            expect(testObject.name).to.equal(null);
        });

        it('Should return null on testObject.income', function () {
            expect(testObject.income).to.equal(null);
            expect($('#income').val()).to.equal('');
            expect(testObject.name).to.equal(null);
            expect($('#name').val()).to.equal('');
        });
    });

    describe('Test cases for changeName(name) function', function () {
        it('Should return null on testObject.name after changeName("")', function () {
            testObject.changeName('');
            expect(testObject.name).to.equal(null);
        });

        it('Should return pesho on testObject.name after changeName("")', function () {
            testObject.name = 'pesho';
            testObject.changeName('');
            expect(testObject.name).to.equal('pesho');
        });

        it('Should return test on testObject.name after changeName("test")', function () {
            testObject.changeName('test');
            expect(testObject.name).to.equal('test');
            expect($('#name').val()).to.equal('test');
        });

        it('Should return anotherTest on testObject.name after changeName("anotherTest")', function () {
            testObject.changeName('anotherTest');
            expect(testObject.name).to.equal('anotherTest');
            expect($('#name').val()).to.equal('anotherTest');
        });

        it('Should return "5" on testObject.name after changeName(5)', function () {
            testObject.changeName(5);
            expect(testObject.name).to.equal(5);
            expect($('#name').val()).to.equal('5');
        });
    });

    describe('test cases for changeIncome(income) function', function () {
        it('Should return null on testObject.income after changeIncome("")', function () {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome('');
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('Should return null on testObject.income after changeIncome("")', function () {
            let prevInput = $('#income').val();
            testObject.income = 88;
            testObject.changeIncome('');
            expect(testObject.income).to.equal(88);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('Should return null on testObject.income after changeIncome(0)', function () {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(0);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('Should return null on testObject.income after changeIncome(-20)', function () {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(-20);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('Should return null on testObject.income after changeIncome(2.5)', function () {
            let prevInput = $('#income').val();
            let prevPropValue = testObject.income;
            testObject.changeIncome(2.5);
            expect(testObject.income).to.equal(prevPropValue);
            expect($('#income').val()).to.equal(prevInput);
        });

        it('Should return "18" on testObject.income after changeIncome("18")', function () {
            testObject.changeIncome(18);
            expect(testObject.income).to.equal(18);
            expect($('#income').val()).to.equal("18");
        });

        it('Should return "50" on testObject.income after {1,-5,50})', function () {
            testObject.changeIncome(1);
            testObject.changeIncome(-5);
            testObject.changeIncome(50);
            expect(testObject.income).to.equal(50);
            expect($('#income').val()).to.equal("50");
        });
    });

    describe('Test cases for updateName(name) function', function () {
        it('Should not change anything on updateName()', function () {
            testObject.updateName('pesho');
            expect($('#name').val()).to.equal('');
            expect(testObject.name).to.equal(null);
        });

        it('Should not change anything on updateName()', function () {
            testObject.name = 'kiro';
            testObject.updateName('pesho');
            expect($('#name').val()).to.equal('');
            expect(testObject.name).to.equal('kiro');
        });

        it('Should update testObject.name on updateName()', function () {
            let nameInput = $('#name');
            nameInput.val('pesho');
            testObject.updateName();
            expect(testObject.name).to.equal('pesho');
            expect(nameInput.val()).to.equal('pesho');
        });

        it('Should update testObject.name on updateName()', function () {
            testObject.name = 'test';
            let nameInput = $('#name');
            nameInput.val('pesho');
            testObject.updateName();
            expect(testObject.name).to.equal('pesho');
            expect(nameInput.val()).to.equal('pesho');
        });
    });

    describe('Test cases for updateIncome() function', function () {
        it('Should not change anything on updateIncome()', function () {
            testObject.updateIncome();
            expect($('#income').val()).to.equal('');
        });

        it('Should not change anything on updateIncome()', function () {
            let incomeInput = $('#income');
            incomeInput.val(2.5);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('2.5');
            expect(testObject.income).to.equal(null);
        });

        it('Should not change anything on updateIncome()', function () {
            let incomeInput = $('#income');
            incomeInput.val(2.5);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('2.5');
            expect(testObject.income).to.equal(null);
        });

        it('Should not change anything on updateIncome()', function () {
            let incomeInput = $('#income');
            incomeInput.val('test');
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('test');
            expect(testObject.income).to.equal(null);
        });

        it('Should not change anything on updateIncome() with previously set obj.income', function () {
            testObject.income = 65;
            let incomeInput = $('#income');
            incomeInput.val(-30);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('-30');
            expect(testObject.income).to.equal(65);
        });

        it('Should not change anything on updateIncome() with previously set obj.income', function () {
            testObject.income = 65;
            let incomeInput = $('#income');
            incomeInput.val(0);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('0');
            expect(testObject.income).to.equal(65);
        });

        it('Should change income on updateIncome() {50}', function () {
            let incomeInput = $('#income');
            incomeInput.val(50);
            testObject.updateIncome();
            expect(incomeInput.val()).to.equal('50');
            expect(testObject.income).to.equal(50);
        });
    });
});