class MailBox {
    constructor() {
        this.mailbox = [];
    }

    addMessage(subject, text) {
        this.mailbox.push({subject, text});
        return this;
    }

    get messageCount() {
        return this.mailbox.length;
    }

    deleteAllMessages() {
        this.mailbox = [];
    }

    findBySubject(substr) {
        let findResults = [];
        for (let message of this.mailbox) {
            if (message["subject"].includes(substr)) {
                findResults.push(message);
            }
        }
        return findResults;
    }

    toString() {
        let print = '';
        if (this.mailbox.length !== 0) {
            for (let message of this.mailbox) {
                print += `\n * [${message["subject"]}] ${message["text"]}`;
            }
        } else {
            print += '\n * (empty mailbox)';
        }
        return print;
    }
}

