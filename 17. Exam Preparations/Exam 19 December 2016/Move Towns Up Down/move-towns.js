function move(direction) {
    let option = $("#towns option:selected");
    if (direction === -1) {
        option.first().prev().before(option);
    } else {
        option.last().next().after(option);
    }
}