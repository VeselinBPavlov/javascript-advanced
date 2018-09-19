class Task {
    // Create properties of the class.
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    // Check for valid deadline.
    get deadline() {
        return this._deadline;
    }
    set deadline(deadline) {
        if (deadline < Date.now()) {
            throw new Error('Date cannot be in the past');
        } else {
            return this._deadline = deadline;
        }
    }

    // Check is status overdue.
    get isOverdue() {
        return this._deadline < Date.now() && this.status !== "Complete";
    }

    // Create static comparator.
    // Make ranks of status for criteria.
    get rank() {
        if (this.isOverdue) {
            return 0;
        } else if (this.status === 'In Progress') {
            return 1;
        } else if (this.status === 'Open') {
            return 2;
        } else {
            return 3;
        }
    }
    // Take criteria and sort tasks.
    static comparator(a, b) {
        let criteria = a.rank - b.rank;
        if (criteria === 0) {
            return a.deadline - b.deadline;
        }
        return criteria;
    }

    // Create toString function for print.
    toString() {
        let print = '';
        let icon = '';
        let icons = {
            "Open": "\u2731",
            "In Progress": "\u219D",
            "Complete": "\u2714",
            "Overdue": "\u26A0"
        };
        // Take the correct icon.
        if (this.isOverdue === true && this.status !== "Complete") {
            icon = icons["Overdue"];
        } else {
            icon = icons[this.status];
        }
        // Take task (and deadline or status if necessary.
        print += `[${icon}] `;
        print += `${this.title} `;
        if (this.isOverdue === true) {
            print += '(overdue)';
        } else if (this.status !== "Complete") {
            print += `${this.deadline}`;
        }

        return print;
    }
}

// Test.
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
//let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
//task1.deadline = new Date(2005, '4', '20');