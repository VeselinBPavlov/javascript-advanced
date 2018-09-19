let PaymentPackage = require('../payment-package');
let expect = require('chai').expect;

describe("Payment Package", function() {
    let paymentPackage;
    describe('Instance properties', function () {
        it("Instance type", function() {
            paymentPackage = new PaymentPackage('HR', 200);
            expect(paymentPackage instanceof PaymentPackage).to.equal(true);
        });
        it("Print package", function() {
            paymentPackage = new PaymentPackage('HR', 200);
            expect(console.log(paymentPackage)).to.equal(undefined);
        });
        it("Test properties", function() {
            expect(typeof paymentPackage.name).to.equal('string');
            expect(typeof paymentPackage.value).to.equal('number');
            expect(typeof paymentPackage.VAT).to.equal('number');
            expect(typeof paymentPackage.active).to.equal('boolean');
            expect(typeof paymentPackage.toString).to.equal('function');
        });
        it("Test properties", function() {
            expect(PaymentPackage.prototype.hasOwnProperty('name')).to.equal(true);
            expect(PaymentPackage.prototype.hasOwnProperty('value')).to.equal(true);
            expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.equal(true);
            expect(PaymentPackage.prototype.hasOwnProperty('active')).to.equal(true);
            expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.equal(true);
        });
    });

    describe('Name property', function () {
        it('Name correct', function () {
            paymentPackage = new PaymentPackage('HR', 200);
            expect(paymentPackage._name).to.equal('HR');
            let notThrowError = () => paymentPackage = new PaymentPackage('HR', 200);
            expect(notThrowError).to.not.throw();

        });
        it('Name Error', function () {
            let emptyString = () => paymentPackage = new PaymentPackage('', 200);
            expect(emptyString).to.throw();
            let notAString = () => paymentPackage = new PaymentPackage(200, 200);
            expect(notAString).to.throw();
        });
    });

    describe('Value property', function () {
        it('Value correct', function () {
            paymentPackage = new PaymentPackage('HR', 200);
            expect(paymentPackage._value).to.equal(200);
            let notThrowError = () => paymentPackage = new PaymentPackage('HR', 200);
            expect(notThrowError).to.not.throw();
        });
        it('Value Error', function () {
            let notANumber = () => paymentPackage = new PaymentPackage('HR', "HR");
            expect(notANumber).to.throw();
            let minusNumber = () => paymentPackage = new PaymentPackage('HR', -2);
            expect(minusNumber).to.throw();
            let noNumber = () => paymentPackage = new PaymentPackage('HR');
            expect(noNumber).to.throw();
        });
    });

    describe('VAT property', function () {
        it('Vat correct', function () {
            paymentPackage.VAT = 20;
            expect(paymentPackage._VAT).to.equal(20);
            expect(() => paymentPackage.VAT = "Test").to.throw();
            expect(() => paymentPackage.VAT = -1).to.throw();
        });
    });

    describe('Active property', function () {
        it('Active correct', function () {
            expect(paymentPackage.active).to.equal(true);
            paymentPackage.active = false;
            expect(paymentPackage._active).to.equal(false);
            expect(() => paymentPackage.active = 'Test').to.throw();
        });
    });

    describe('toString property', function () {
        it('toString correct', function () {
           paymentPackage = new PaymentPackage('HR', 200);
           expect(paymentPackage.toString()).to.equal('Package: HR\n- Value (excl. VAT): 200\n- Value (VAT 20%): 240');
        });
        it('toString correct', function () {
            paymentPackage = new PaymentPackage('HR', 200);
            paymentPackage.active = false;
            paymentPackage.VAT = 30;
            expect(paymentPackage.toString()).to.equal('Package: HR (inactive)\n- Value (excl. VAT): 200\n- Value (VAT 30%): 260');
        });
    });
});
