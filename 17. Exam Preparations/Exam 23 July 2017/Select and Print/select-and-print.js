function move(command) {
    switch (command) {
        // Move selected town to selected list.
        case 'right': {
            let option = $('#available-towns');
            let newOption = $(`<option>${option.val()}</option>`);
            newOption.appendTo($('#selected-towns'));
            $('#available-towns').find(':selected').remove();
        } break;
        // Move selected town to available list.
        case 'left': {
            let option = $('#selected-towns');
            let newOption = $(`<option>${option.val()}</option>`);
            newOption.appendTo($('#available-towns'));
            $('#selected-towns').find(':selected').remove();
        } break;
        // Print selected towns.
        case 'print': {
            $('#output').empty();
            let arr = [];
            $('#selected-towns').find('option').each(function() {
                arr.push($(this).val());
            });

            $('#output').text(arr.join('; '));
        }
    }
}