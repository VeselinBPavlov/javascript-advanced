function addItem() {
    let input = document.getElementById('newText');

    if (input.value.trim() !== '') {
        let li = document.createElement('li'); 
        li.textContent = input.value;

        let a = document.createElement('a');
        a.href = '#';
        a.textContent = '[Delete]';

        a.addEventListener('click', function deleteItem(event) {
            let forDelete = event.target.parentNode;
            forDelete.parentNode.removeChild(forDelete);
        });
        li.appendChild(a);
        document.getElementById('items').appendChild(li);
        input.value = '';
    }
}