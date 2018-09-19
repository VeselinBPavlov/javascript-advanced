function attachEvents() {
    $('#items li').on('click', function () { 
        if ($(this).attr('data-selected')) {
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        } else {               
            $(this).attr('data-selected', true);
            $(this).css('background', '#DDD');
        }                      
    });

    $('#showTownsButton').on('click', function () {
        let arr = $('#items li[data-selected=true]')
            .toArray()
            .map(li => $(li).text()).join(', ');
        $('#selectedTowns').text(`Selected towns: ${arr}`);
    });
}
