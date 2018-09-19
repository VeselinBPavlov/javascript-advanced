function attachEvents() {
    let input = $('#townName');
    let deleteBtn = $('#btnDelete');
    deleteBtn.on('click', removeTown);

    function removeTown() {
        let isRemoved = false;
        $('#towns').find('option').each(function() {
            if ($(this).val() === input.val()) {
                $(this).remove();
                isRemoved = true;
            }
        });
        if (isRemoved) {
            $('#result').text(`${input.val()} deleted.`);
        } else {
            $('#result').text(`${input.val()} not found.`);
        }
        input.val('');
    }
}