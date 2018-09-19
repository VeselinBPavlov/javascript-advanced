let SubscriptionCard = require('../subscription-card');
let expect = require('chai').expect;

describe("Subscription Card", function() {
    let subscrCard;
    describe("Checking properties", function () {
        it('Instance', function () {
            subscrCard = new SubscriptionCard('Pesho', 'Pesho', '0000000');
            expect(subscrCard instanceof SubscriptionCard).to.equal(true);
        });
        it('Console log', function () {
            subscrCard = new SubscriptionCard('Pesho', 'Pesho', '0000000');
            expect(console.log(subscrCard)).to.equal(undefined);
        });

        it("Test properties", function() {
            expect(typeof subscrCard._firstName).to.equal('string');
            expect(typeof subscrCard._lastName).to.equal('string');
            expect(typeof subscrCard._SSN).to.equal('string');
            expect(typeof subscrCard._subscriptions).to.equal('object');
            expect(typeof subscrCard._blocked).to.equal('boolean');
            expect(typeof subscrCard.addSubscription).to.equal('function');
            expect(typeof subscrCard.isValid).to.equal('function');
            expect(typeof subscrCard.block).to.equal('function');
            expect(typeof subscrCard.unblock).to.equal('function');
        });
    });

    describe("Test properties", function () {
        beforeEach(function () {
            subscrCard = new SubscriptionCard('Pesho', 'Peshov', '0000000');
        });
        it('Test constructor', function () {
            expect(subscrCard._firstName).to.equal('Pesho');
            expect(subscrCard._lastName).to.equal('Peshov');
            expect(subscrCard._SSN).to.equal('0000000');
        });
        it('Test addSubscription', function () {
            subscrCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(subscrCard._subscriptions.length).to.equal(1);
            subscrCard.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            subscrCard.addSubscription('30', new Date('2018-05-25'), new Date('2016-06-24'));
            expect(subscrCard.isValid('*', new Date('2018-05-25'))).to.equal(true);
            subscrCard.block();
            expect(subscrCard._blocked).to.equal(true);
            expect(subscrCard.isValid('120', new Date('2018-04-22'))).to.equal(false);
            expect(subscrCard.isValid('*', new Date('2018-05-25'))).to.equal(false);
            subscrCard.unblock();
            expect(subscrCard._blocked).to.equal(false);
            expect(subscrCard.isValid('120', new Date('2018-04-22'))).to.equal(true);
            expect(subscrCard.isValid('120', new Date('2018-04-23'))).to.equal(true);
            expect(subscrCard.isValid('120', new Date('2018-05-01'))).to.equal(true);
            expect(subscrCard.isValid('120', new Date('2018-05-21'))).to.equal(true);
            expect(subscrCard.isValid('*', new Date('2018-05-25'))).to.equal(true);
        });
    });
});
