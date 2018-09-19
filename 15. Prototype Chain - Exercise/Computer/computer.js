function createComputerHierarchy() {
    class Characteristics {
        constructor(manufacturer) {
            if (new.target === Characteristics) {
                throw new Error('Cannot create instance of abstract class.');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Characteristics {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor extends Characteristics {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery extends Characteristics {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Characteristics {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            if (new.target === Computer) {
                throw new Error('Cannot create instance of abstract class.');
            }
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(characteristics) {
            if (characteristics instanceof Battery === false) {
                throw new TypeError;
            }
            this._battery = characteristics;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }
        set keyboard(characteristics) {
            if (characteristics instanceof Keyboard === false) {
                throw new TypeError;
            }
            this._keyboard = characteristics;
        }

        get monitor() {
            return this._monitor;
        }
        set monitor(characteristics) {
            if (characteristics instanceof Monitor === false) {
                throw new TypeError;
            }
            this._monitor = characteristics;
        }
    }

    return { Battery, Keyboard, Monitor, Computer, Laptop, Desktop };
}

// Make this function visible for next task.
module.exports = { createComputerHierarchy };

// Test.
let comp = createComputerHierarchy();
let Keyboard = comp.Keyboard;
let Monitor = comp.Monitor;
let Battery = comp.Battery;
let Laptop = comp.Laptop;
let Desktop = comp.Desktop;

let keyboard = new Keyboard('Sony', 2000);
console.log(keyboard);
console.log();
let monitor = new Monitor('Samsung', 100, 200);
console.log(monitor);
console.log();
let battery = new Battery('Tesla', 10);
console.log(battery);
console.log();
let laptop = new Laptop('Asus', 3000, 4, 120, 500, 'Blue', battery);
console.log(laptop);
console.log();
let desktop = new Desktop('Acer', 4100, 8, 250, keyboard, monitor);
console.log(desktop);