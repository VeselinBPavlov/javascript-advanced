function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }


    return { Person, Teacher, Student }
}

// Test.
let obj = toStringExtension();
let Person = obj.Person;
let Teacher = obj.Teacher;
let Student = obj.Student;

let p = new Person('Gosho', 'gosho@abv.bg');
//console.log(p.toString());
let t = new Teacher('Pesho', 'pesho@abv.bg', 'JavaScript');
//console.log(t.toString());
let s = new Student('Mitko', 'mitko@abv.bg', 'Java');
//console.log(s.toString());

// Make visible class for Extending Prototype problem.
module.exports = { Person };