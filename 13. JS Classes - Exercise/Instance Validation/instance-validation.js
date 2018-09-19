class CheckingAccount {
    constructor(clientId, email, fistName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = fistName;
        this.lastName = lastName;
    }

    // Check is ID valid.
    get clientId() {
        return this._clientId;
    }
    set clientId(clientId) {
        if (typeof clientId !== "string" || clientId.length !== 6 || !Number.isInteger(Number(clientId))) {
            throw new TypeError('Client ID must be a 6-digit number');
        } else {
            this._clientId = clientId;
        }
    }

    // Check is email valid.
    get email() {
        return this._email;
    }
    set email(email) {
        let emailPattern = /[\w]+@[a-z.]+/; // Check regex for sure.
        if (emailPattern.test(email) === false) {
            throw new TypeError('Invalid e-mail');
        } else {
            this._email = email;
        }
    }

    // Check is First name valid.
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let isValid = this.isNameValid(firstName);
        if (isValid !== '') {
            throw new TypeError(`First ${isValid}`);
        } else {
            this._firstName = firstName;
        }
    }

    // Check is Last name valid.
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let isValid = this.isNameValid(lastName);
        if (isValid !== '') {
            throw new TypeError(`Last ${isValid}`);
        } else {
            this._lastName = lastName;
        }
    }

    // Validation method for first and last name
    isNameValid(name) {
        let errorMessage = '';
        let lengthPattern = /\w{3,20}/g;
        let charPattern = /^[A-Za-z]+$/g;
        if (lengthPattern.test(name) === false) {
            errorMessage = 'name must be between 3 and 20 characters long';
        }
        if (charPattern.test(name) === false) {
            errorMessage = 'name must contain only Latin characters';
        }

        return errorMessage;
    }
}

// Test.
let a = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let a1 = new CheckingAccount('131455', 'ivan@ ', 'Ivan', 'Petrov');
//let a2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
//let a3 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
//let a4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'Petrov');
