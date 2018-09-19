function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = { color: ribbonColor, length: Number(ribbonLength) }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return { Balloon, PartyBalloon, BirthdayBalloon };
}

// Test.
let obj = solve();
let Balloon = obj.Balloon;
let PartyBalloon = obj.PartyBalloon;
let BirthdayBalloon = obj.BirthdayBalloon;

let b = new Balloon('red', 20.5);
console.log(b);
let pb = new PartyBalloon('green', 13, 'white', 30);
console.log(pb);
let bb = new BirthdayBalloon('blue', 15, 'black', 25, 'Party');
console.log(bb);