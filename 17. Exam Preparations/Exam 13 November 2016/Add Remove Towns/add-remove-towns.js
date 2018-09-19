function attachEvents() {
    let addBtn = $('#btnAdd');
    let deleteBtn = $('#btnDelete');
    let option = $('#towns');
    let input = $('#newItem');

    addBtn.on('click', addItem);
    deleteBtn.on('click', deleteItem);

    function addItem() {
        if (input.val() !== '') {
            option.append($(`<option>${input.val()}</option>`));
            input.val('');
        }
    }
    
    function  deleteItem() {
        option.find(':selected').remove();
    }
}