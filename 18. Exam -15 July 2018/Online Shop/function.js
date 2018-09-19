function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $('.custom-select');
    let submitBtn = $('#submit');
    let price = $('#price');
    let quantity = $('#quantity');
    let capacity = $('#capacity');
    let sum = $('#sum');

    product.on('input', () => {
        submitBtn.removeAttr('disabled');
    });

    submitBtn.on('click', () => {
        if (product.val() !== '' && price.val() !== '' && quantity.val() !== '') {
            let li = $(`<li>Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}</li>`);
            li.appendTo($('.display'));

            let capacityNum = Number(capacity.val());
            capacityNum += Number(quantity.val());
            capacity.val(capacityNum);

            let priceNum = Number(price.val());
            let sumNum = Number(sum.val());
            sumNum += priceNum;
            sum.val(sumNum);

            if (Number(capacity.val()) >= 150) {
                capacity.val('full');
                capacity.addClass('fullCapacity');
                product.val('');
                price.val(1);
                quantity.val(1);
                product.attr('disabled', 'disabled');
                price.attr('disabled', 'disabled');
                quantity.attr('disabled', 'disabled');
                submitBtn.attr('disabled', 'disabled');
            } else {
                product.val('');
                price.val(1);
                quantity.val(1);
                submitBtn.attr('disabled', 'disabled');
            }
        }
    });
}
