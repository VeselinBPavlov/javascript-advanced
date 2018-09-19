class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this._element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.update();
    }

    update() {
        if (this.online) {
            this._element.find('.title').addClass('online');
        } else {
            this._element.find('.title').removeClass('online');
        }
    }

    createElement() {
        let contact = $("<article>");
        let title = $("<div class='title'>").text(this.firstName + ' ' + this.lastName);
        let info = $("<div class='info'>");
        info.hide();
        info.append($(`<span>&phone; ${this.phone}</span>`));
        info.append($(`<span>&#9993; ${this.email}</span>`));
        title.append($("<button>&#8505;</button>").click(() => info.toggle()));
        contact.append(title);
        contact.append(info);

        return contact;
    }

    render(target) {
        $(`#${target}`).append(this._element);
    }
}

// Test.
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

//After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
