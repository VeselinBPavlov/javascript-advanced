function addItem() {
    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');

    let menu = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.text = newText.value;
    newOption.value = newValue.value;

    menu.appendChild(newOption);

    newText.value = '';
    newValue.value = '';
}