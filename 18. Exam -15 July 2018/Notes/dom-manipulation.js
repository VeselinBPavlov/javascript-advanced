function addSticker() {
    let titleInput = $('.title');
    let textInput = $('.content');

    if (titleInput.val() !== '' && textInput.val() !== '') {
        let li = $('<li class="note-content">');
        let closeBtn = $('<a class="button">x</a>');
        let h2 = $(`<h2>${titleInput.val()}</h2>`);
        let hr = $('<hr>');
        let p = $(`<p>${textInput.val()}</p>`);

        li.appendTo($('#sticker-list'));
        closeBtn.appendTo(li);
        h2.appendTo(li);
        hr.appendTo(li);
        p.appendTo(li);

        titleInput.val('');
        textInput.val('');

        closeBtn.on('click', (e) => {
            $(e.target).parent().remove();
        });
    }
}