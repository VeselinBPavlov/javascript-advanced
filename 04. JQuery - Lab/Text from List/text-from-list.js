function extractText() {
    let value = $('#items li').toArray().map(li => $(li).text()).join(', ');
    $('#result').text(value);
}
