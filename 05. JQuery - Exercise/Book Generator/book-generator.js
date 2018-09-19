function createBook(selector, titleName, authorName, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, titleName, authorName, isbn) {
            let container = $(selector);
            let bookContainer = $(`<div id="book + ${id} style="border: medium none;">`);
            let pTitle = $(`<p class="title">${titleName}</p>`);
            let pAuthor = $(`<p class="author">${authorName}</p>`);
            let pISBN = $(`<p class="isbn">${isbn}</p>`);
            let selectBtn = $('<button>Select</button>');
            let deselectBtn = $('<button>Deselect</button>');

            bookContainer.appendTo(container);
            pTitle.appendTo(bookContainer);
            pAuthor.appendTo(bookContainer);
            pISBN.appendTo(bookContainer);
            selectBtn.appendTo(bookContainer);
            deselectBtn.appendTo(bookContainer);

            selectBtn.on('click', function () {
                bookContainer.css("border", "2px solid blue");
            });

            deselectBtn.on('click', function () {
                bookContainer.css("border", "");
            });

            id++;
        }
    } ());   
    bookGenerator(selector, titleName, authorName, isbn);
}
