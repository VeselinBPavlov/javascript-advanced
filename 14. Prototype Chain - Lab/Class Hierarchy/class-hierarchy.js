function classHierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error("Cannot instantiate an abstract class.")
            }
        }

        get area() {
            return undefined;
        }

        toString() {
            let type = this.constructor.name;
            return type;
        }
    }

    class Circle extends Figure{
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `${super.toString()} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}


// Test.
//let f = new Figure();
let c = new Circle(5);
console.log(c.area);
console.log(c.toString());
let r = new Rectangle(3,4);
console.log(r.area);
console.log(r.toString());
