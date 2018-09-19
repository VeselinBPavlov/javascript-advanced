class PaymentProcessor {
    constructor(options) {
        this.options = options;
        this.payments = [];
        this.idRegister = [];
    }

    get options() {
        return this._options;
    }
    set options(options) {
        if (options === undefined) {
            this._options = { types: ["service", "product", "other"], precision: 2};
            return this._options;
        } else {
            this._options = { types: [], precision: 2 };
            if (options.hasOwnProperty("types")) {
                for (let type of options.types) {
                    this._options.types.push(type);
                }
            } else {
                this._options.types = ["service", "product", "other"];
            }
            if (options.hasOwnProperty("precision")) {
                this._options.precision = options["precision"];
            } else {
                this._options.precision = 2;
            }
            return this._options;
        }
    }

    registerPayment(id, name, type, value) {
        this._isValidId(id);
        this._isValidName(name);
        this._isValidType(type);
        this._isValidValue(value);
        this.payments.push({
            id: id,
            name: name,
            type: type,
            value: Number(value)});
        this.idRegister.push(id);
    }

    deletePayment(id) {
        this._validateId(id);
        for (let payment of this.payments) {
            if (payment.id === id) {
                let index = this.payments.indexOf(payment);
                this.payments.splice(index, 1);
                this.idRegister.splice(index, 1);
            }
        }
    }

    get(id) {
        this._validateId(id);
        let payment = this._findPayment(id);
        let details = '';
        details += `Details about payment ID: ${id}`;
        details += `\n- Name: ${payment.name}`;
        details += `\n- Type: ${payment.type}`;
        details += `\n- Value: ${payment.value.toFixed(this._options.precision)}`;
        return details;
    }

    setOptions(options) {
        if (options.hasOwnProperty("types")) {
            if (options["types"] instanceof Array === false) {
                throw new Error('Input is not an object');
            }
            this._options.types = options["types"];
        }
        if (options.hasOwnProperty("precision")) {
            if (typeof options["precision"] !== "number"
                || Number.isInteger(options["precision"]) === false
                || Number(options["precision"]) < 0) {
                throw new Error('Input is not an object');
            }
            this._options.precision = options["precision"];
        }
    }

    toString() {
        let print = '';
        let balance = this._findBalance();
        print += 'Summary:';
        print += `\n-Payments: ${this.payments.length}`;
        print += `\n-Balance: ${balance}`;
        return print;
    }

    _findBalance() {
        let sum = 0;
        for (let payment of this.payments) {
            sum += payment.value;
        }
        return sum.toFixed(this._options.precision);
    }

    _findPayment(id) {
        let paymentToFind = {};
        for (let payment of this.payments) {
            if (payment.id === id) {
                paymentToFind = payment;
                return paymentToFind;
            }
        }
    }

    _validateId(id) {
        if (this.idRegister.includes(id) === false) {
            throw new Error('ID not found');
        }
    }

    _isValidId(id) {
        if (typeof id !== 'string' || id === '') {
            throw new Error('Invalid ID');
        }
        if (this.idRegister.includes(id)) {
            throw new Error('ID already exist');
        }
    }

    _isValidName(name) {
        if (typeof name !== 'string' || name === '') {
            throw new Error('Invalid name');
        }
    }

    _isValidType(type) {
        if (this._options.types.includes(type) === false) {
            throw new Error('Invalid type');
        }
    }

    _isValidValue(value) {
        if (typeof value !== 'number') {
            throw new Error('Invalid value');
        }
    }
}

// Test.
// Initialize processor with default options
//const generalPayments = new PaymentProcessor();
//generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
//generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
//console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

//generalPayments.setOptions({types: ['product', 'material']});
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
//console.log(generalPayments.get('E028'));
//generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

//generalPayments.deletePayment('E028');
//console.log(generalPayments.toString());

// Initialize processor with custom types
//const servicePyaments = new PaymentProcessor({types: ['service']});
//servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
//servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
//console.log(servicePyaments.toString());

// Initialize processor with custom precision
//const transactionLog = new PaymentProcessor({precision: 5});
//transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
//console.log(transactionLog.toString());