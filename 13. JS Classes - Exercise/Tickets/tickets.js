function registerTicket(ticketArr, sortingCriteria) {
    // Create class ticket.
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    // Make a ticket from input information.
    let register = [];
    for (let ticketData of ticketArr) {
        let [destination, price, status] = ticketData.split('|');
        let ticket = new Ticket(destination, Number(price), status);
        register.push(ticket);
    }

    // Sort register by input criteria.
    switch (sortingCriteria) {
        case 'destination': {
            register = register.sort((a, b) => a.destination.localeCompare(b.destination));
        } break;
        case 'price': {
            register = register.sort((a, b) => a.price - b.price);
        } break;
        case 'status': {
            register = register.sort((a, b) => a.status.localeCompare(b.status));
        } break;
    }

    return register;
}

// Test.
console.log(registerTicket(['Philadelphia|94.20|available',
                            'New York City|95.99|available',
                            'New York City|95.99|sold',
                            'Boston|126.20|departed'],
                            'destination'));
console.log();
console.log(registerTicket(['Philadelphia|94.20|available',
                            'New York City|95.99|available',
                            'New York City|95.99|sold',
                            'Boston|126.20|departed'],
                            'status'));
