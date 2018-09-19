class Person {
    constructor (fistName, lastName, age, email) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString () {
        return (`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
    }
}

// Make class Person public for Get Person task.
module.exports = {Person};