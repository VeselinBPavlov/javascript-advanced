let Console = require('../../C# Console/csharp-console').Console;
let expect = require('chai').expect;

describe('Console', function () {
    // Correct respond.
    it('Should return "test" from ("test")', function () {
        expect(Console.writeLine('test')).to.equal('test');
    });
    it('Should return "{name: "Ivan"}" from ({name: "Ivan"})', function () {
        expect(Console.writeLine({name: "Ivan"})).to.equal('{"name":"Ivan"}');
    });
    it('Should return "Ivan Ivanov, Dragan Petkov"', function () {
        expect(Console.writeLine('Ivan {0}, Dragan {1}', 'Ivanov', 'Petkov')).to.equal('Ivan Ivanov, Dragan Petkov');
    });
    it('Should return stringify object', function () {
        let obj = {'name': 'stamat'};
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj));
    });

    // Type error.
    it('Should return "Type error"', function () {
        expect(() => Console.writeLine(2, 'Pesho')).to.throw(TypeError);
    });

    // Range Error
    it('Should return "Range error"', function () {
        expect(() => Console.writeLine('Ivan {0} Dragan {1}', 'Ivanov', 'Petkov', 'Bakalov')).to.throw(RangeError);
    });
    it('Should return "Range error"', function () {
        expect(() => Console.writeLine('Ivan {0} Dragan {1} Petkan {2}', 'Ivanov', 'Petkov')).to.throw(RangeError);
    });
    it('Should return "Range error"', function () {
        expect(() => Console.writeLine('Ivan {0} Dragan {5}', 'Ivanov', 'Petkov')).to.throw(RangeError);
    });
    it('Should return "Range error"', function () {
        expect(() => Console.writeLine('Ivan {-2} Dragan {0}', 'Ivanov', 'Petkov')).to.throw(RangeError);
    });
});