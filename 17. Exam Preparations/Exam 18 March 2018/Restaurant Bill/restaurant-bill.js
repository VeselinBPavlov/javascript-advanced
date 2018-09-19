function addProduct() {
    // Take input parameters.
    let inputProduct = $('input[type="text"]');
    let inputPrice = $('input[type="number"]');
    let product = inputProduct.val();
    let price = inputPrice.val();


    if (product !== '' && price !== '') {
        // Add new table row.
        let tableRow = $('<tr>')
            .append(`<td>${product}`)
            .append(`<td>${Number(price)}`);
        tableRow.appendTo($('#product-list'));

        // Calculate sum of the bill.
        let total = $('tfoot tr td:last-of-type');
        let sum = Number(total.text()) + Number(price);
        total.text(sum);
        inputProduct.val('');
        inputPrice.val('');
    }
}