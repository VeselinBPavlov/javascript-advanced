class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(length) {
        return this.innerLength += Number(length);
    }

    decrease(length) {
        this.innerLength -= Number(length);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
        return this.innerLength;
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        } else if (this.innerString.length > this.innerLength) {
            return this.innerString.substr(0, this.innerLength) + '...';
        } else {
            return '...';
        }
    }
}

// Test.
let test = new Stringer("Test", 6);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(5);
console.log(test.toString()); //Test
