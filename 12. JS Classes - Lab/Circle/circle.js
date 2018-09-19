class Circle {
    constructor (radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Test.
let circle = new Circle(10); // Create object with class Circle.
console.log(circle.radius); // Get Radius.
console.log(circle.diameter); // Get Diameter.
console.log(circle.area); // Get Area.
circle.diameter = 40; // Set diameter.
console.log(circle.diameter); // Get new diameter.
console.log(circle.radius); // Get new radius.