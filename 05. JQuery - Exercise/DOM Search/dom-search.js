function domSearch(selector, isCaseSensitive) {
    // Create HTML structure
    let container = $(selector);
    let addDiv = $('<div class="add-controls">');
    let addLabel = $('<label>Enter text: <input></label>');
    let addBtn = $('<a class="button" style="display: inline-block;">Add</a>');
    let searchDiv = $('<div class="search-controls">');
    let searchLabel = $('<label>Search: <input></label>');
    let listItems = $('<ul class="items-list">');
    let result = $('<div class="result-controls">');

    addDiv.appendTo(container);
    addLabel.appendTo(addDiv);
    addBtn.appendTo(addDiv);
    searchDiv.appendTo(container);
    searchLabel.appendTo(searchDiv);
    result.appendTo(container);
    listItems.appendTo(result);    


    // Add elements in list    
    addBtn.on('click', addElementToList);    

    function addElementToList() {
        let element = $('.add-controls label input');

        let xBtn = $('<a class="button">X</a>');
        let listItem = $('<li class="list-item">');
        let elementToAdd = $(`<strong>${element.val()}<strong>`);

        listItem.appendTo(listItems);
        xBtn.appendTo(listItem);
        elementToAdd.appendTo(listItem);

        element.val('');

        xBtn.on('click', function () {
            listItem.remove();
        });
    }

    
    // Search element in list
    let searchText = $('.search-controls label input');

    $(searchText).on('input', function () {
        let search = searchText.val();
        let items = $('.list-item').toArray();
        for (let item of items) {
            let currentItem = $(item);
            if (isCaseSensitive) {
                if (currentItem.text().substring(1).indexOf(search) < 0) {
                    $(item).css('display', 'none');
                } else {
                    $(item).css('display', 'block');
                }
            } else {
                if (currentItem.text().substring(1).toLowerCase().indexOf(search.toLowerCase()) < 0) {
                    $(item).css('display', 'none');
                } else {
                    $(item).css('display', 'block');
                }
            }
        }
    });    
}
