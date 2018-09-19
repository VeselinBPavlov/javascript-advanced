function initializeTable() {
    $('#createLink').on('click', createCountry);
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');
    hideButtons();

    function addCountryToTable(country, town) {
        let tableRow = $('<tr>')
            .append(`<td>${country}`)
            .append(`<td>${town}`)
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>')
                    .on('click', moveUp))
                .append($('<a href="#">[Down]</a>')
                    .on('click', moveDown))
                .append($('<a href="#">[Delete]</a>')
                    .on('click', deleteRow)));

        tableRow.css('display', 'none');
        $('#countriesTable').append(tableRow);
        tableRow.fadeIn(2000); 
    }

    function createCountry() {
        let country = $('#newCountryText');
        let capitol = $('#newCapitalText');
        addCountryToTable(country.val(), capitol.val());
        country.val('');
        capitol.val('');
        hideButtons();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            hideButtons();
            row.fadeIn(2000);
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            hideButtons();
            row.fadeIn(2000);
        });
    }

    function deleteRow() {
        $(this).fadeOut(function () {
            $(this).parent().parent().remove();
            hideButtons();
        });        
    }

    function hideButtons() {
        $('#countriesTable a').css('display', '');
        $('#countriesTable tr:eq(2) a:contains("Up")').css('display', 'none');
        $('#countriesTable tr:last a:contains("Down")').css('display', 'none');

    }
}
