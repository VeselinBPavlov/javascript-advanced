let Person = require('../Inheriting toString/inheriting-tostring').Person;

function extendClass(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

// Test.
extendClass(Person);
let p = new Person('Ivan', 'ivan@abv.bg');
console.log(p.species);
console.log(p.toSpeciesString());