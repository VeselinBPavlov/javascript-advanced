// Get class Person from "Person Class" task.
let Person = require('../Person Class/person-class').Person;

function createPerson() {
    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com')
    ]
}

// Test
createPerson().forEach(p => console.log(p.toString()));