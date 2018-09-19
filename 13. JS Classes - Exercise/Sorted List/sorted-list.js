class Array {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element) {
        this.arr.push(element);
        this.size++;
        this.arr = this.arr.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.size--;
            this.arr = this.arr.sort((a, b) => a - b);
        } else {
            throw new Error;
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        } else {
            throw new Error;
        }
    }
}

// Test.
let arr = new Array();
arr.add(3);
arr.add(2);
arr.add(1);
console.log(arr);
arr.remove(1);
console.log(arr);
console.log(arr.size);
console.log(arr.get(1));