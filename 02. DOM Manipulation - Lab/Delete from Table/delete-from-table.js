function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value;
    let tableRows = document.getElementById('customers').children[0].children;

    for (let i = 0;  i < tableRows.length; i++) {
        let currentValue = tableRows[i].children[1].textContent;

        if (input === currentValue) {
            tableRows[i].parentNode.removeChild(tableRows[i]);
            document.getElementById('result').textContent = "Deleted.";
            return;
        }
    }
    document.getElementById('result').textContent = "Not found.";
}