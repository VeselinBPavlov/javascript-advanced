let rgbToHexColor = require('../rgb-to-hex').rgbToHexColor;
let expect = require('chai').expect;

describe('Convert rgb to hex color tests', function () {
    it('Should return "#000000" from (0, 0, 0)', function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('Should return #FFFFFF from (255, 255, 255)', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('Should return "undefined" from (300, 300, 300)', function () {
        expect(rgbToHexColor(300, 300, 300)).to.be.equal(undefined);
    });
    it('Should return "undefined" from (-300, -300, -300)', function () {
        expect(rgbToHexColor(-300, -300, -300)).to.be.equal(undefined);
    });
    it('Should return "undefined" from (-300, -300, -300)', function () {
        expect(rgbToHexColor(0, 0, -300)).to.be.equal(undefined);
    });
    it('Should return "undefined" from (-300, -300, -300)', function () {
        expect(rgbToHexColor(0, -2, 0)).to.be.equal(undefined);
    });
    it('Should return "undefined" from (-300, -300, -300)', function () {
        expect(rgbToHexColor("0", 0, 0)).to.be.equal(undefined);
    });
    it('Should return "undefined" from (0, 0)', function () {
        expect(rgbToHexColor(0, 0)).to.be.equal(undefined);
    });
});