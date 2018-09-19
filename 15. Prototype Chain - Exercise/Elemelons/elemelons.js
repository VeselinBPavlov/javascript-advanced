function solve() {

    function getElementIndex(weight, melonSort) {
        return weight * melonSort.length;
    }
    function getMelonType(name) {
        let index = name.indexOf('melon');
        let type = name.substr(0, index);
        return type;
    }
    function printInfo(type, sort, index) {
        let print = '';
        print += `Element: ${type}`;
        print += `\nSort: ${sort}`;
        print += `\nElement Index: ${index}`;
        return print;
    }

    class Melon {
        constructor(weight, melonSort) {
            if (this.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.weight = Number(weight);
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = getElementIndex(this.weight, this.melonSort);
            this.type = getMelonType(this.constructor.name);
        }

        toString() {
            return printInfo(this.type, this.melonSort, this._elementIndex);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = getElementIndex(this.weight, this.melonSort);
            this.type = getMelonType(this.constructor.name);
        }

        toString() {
            return printInfo(this.type, this.melonSort, this._elementIndex);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = getElementIndex(this.weight, this.melonSort);
            this.type = getMelonType(this.constructor.name);
        }

        toString() {
            return printInfo(this.type, this.melonSort, this._elementIndex);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = getElementIndex(this.weight, this.melonSort);
            this.type = getMelonType(this.constructor.name);
        }

        toString() {
            return printInfo(this.type, this.melonSort, this._elementIndex);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort, _elementIndex) {
            super(weight, melonSort, _elementIndex);
            this.names = ['Water', 'Fire', 'Earth', 'Air'];
            this.morph();
        }

        morph() {
            let name = this.names.shift();
            this.type = name;
            this.names.push(name);
        }

        toString() {
            return printInfo(this.type, this.melonSort, this._elementIndex);
        }
    }

    return { Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon };
}

// Test.
let obj = solve();
let Watermelon = obj.Watermelon;
let Melolemonmelon = obj.Melolemonmelon;

let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
console.log();
let melomelon = new Melolemonmelon(13, "Lemon");
console.log(melomelon.toString());
console.log();
melomelon.morph();
melomelon.morph();
console.log(melomelon.toString());
