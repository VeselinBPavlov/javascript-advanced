let Extensible = (function () {
    let id = 0;

    // Return class.
    return class Extensible {
        constructor() {
            this.id = id++;
        }

        // Get properties.
        extend(parentObj) {
            for (let prop in parentObj) {
                if (parentObj.hasOwnProperty(prop)) {
                    if (typeof parentObj[prop] === 'function') {
                        Extensible.prototype[prop] = parentObj[prop];
                    } else {
                        this[prop] = parentObj[prop];
                    }
                }
            }
        }
    }
})();

// Test.
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
