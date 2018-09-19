function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot instantiate an abstract class.");
            }

            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
            this.dividend = 0;
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return { Employee, Junior, Senior, Manager };
}

// Test.
let obj = solve();
let Junior = obj.Junior;
let Senior = obj.Senior;
let Manager = obj.Manager;
let Emoloyee = obj.Employee;

let junior = new Junior('Nick', 23);
junior.salary = 350.00;
junior.work();
junior.collectSalary();
console.log();
let senior = new Senior('Gary', 31);
senior.salary = 630.00;
senior.work();
senior.work();
senior.collectSalary();
console.log();
let manager = new Manager('Bill', 45);
manager.salary = 1000.00;
manager.work();
manager.work();
manager.dividend = 150.00;
manager.collectSalary();
console.log();
let employee = new Employee('Aron', 18);