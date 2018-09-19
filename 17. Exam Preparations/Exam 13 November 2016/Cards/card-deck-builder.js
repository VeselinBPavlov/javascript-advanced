function cardDeckBuilder(selector) {
    let container = $(selector);
    return {
        addCard: function (face, suit) {
            let card;
            let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            let suits = {"D": '\u2666', "S": '\u2660', "H": '\u2665', "C": '\u2663'};

            if (faces.includes(face) && suits.hasOwnProperty(suit)) {
                card = $(`<div class="card">${face} ${suits[suit]}</div>`);
            }
            card.appendTo(container);

            card.on('click', reverseCards);

            function reverseCards() {
                let cards = container.children('.card');
                container.append(cards.get().reverse());
            }
        }
    }
}