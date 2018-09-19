class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(otherRat)  {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }

    getRats () {
        return this.rats;
    }

    toString () {
        let rats = `${this.name}\n`;
        for (let rat of this.rats) {
            rats += `##${rat.name}\n`;
        }
        return rats;
    }
}

// Test.
let test = new Rat("Pesho");
test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.toString());

