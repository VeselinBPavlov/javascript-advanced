function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return { Person, Teacher }
}

// Test.
let obj = personAndTeacher();
let Person = obj.Person;
let Teacher = obj.Teacher;

let p = new Person('Gosho', 'gosho@abv.bg');
console.log(p);
let t = new Teacher('Pesho', 'pesho@abv.bg', 'JavaScript');
console.log(t);