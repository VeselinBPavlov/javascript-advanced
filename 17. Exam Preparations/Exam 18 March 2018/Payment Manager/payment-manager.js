class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    render(id) {
        if(typeof id !== 'string') {
            return;
        }

        this.table = $('<table><caption>' + this.title + ' Payment Manager</caption><thead><tr>' +
            '<th class="name">Name</th>' +
            '<th class="category">Category</th>' +
            '<th class="price">Price</th>' +
            '<th>Actions</th></tr></thead>' +
            '<tbody class="payments"></tbody><tfoot class="input-data"><tr>' +
            '<td><input name="name" type="text"></td><td><input name="category" type="text"></td>' +
            '<td><input name="price" type="number"></td>' +
            '<td><button>Add</button></td></tr></tfoot></table>');

        this.table.appendTo($(`#${id}`));

        this.name = $(`#${id} input[name="name"]`);
        this.category = $(`#${id} input[name="category"]`);
        this.price = $(`#${id} input[name="price"]`);
        let tableBody = $(`#${id} tbody`);
        let addBtn = $(`#${id} tfoot button`);
        let tableData = '';

        addBtn.on('click', () => {
            if(this.name.val() == "" || this.category.val() == "" || this.price.val() == ""){
                return;
            }

            let price = Number(this.price.val());

            tableData = $(`<tr>\n` +
                `<td>${this.name.val()}</td>\n` +
                `<td>${this.category.val()}</td>\n` +
                `<td>${price}</td>\n` +
                `<td><button>Delete</button></td>\n` +
                `</tr>\n`);

            this.name.val('');
            this.category.val('');
            this.price.val('');

            tableBody.append(tableData);

            let deleteBtn = $(`#${id} .payments tr td button`);
            deleteBtn.on("click", (e) => {
                $(e.target).parents('tr').remove();
            });
        });
    }
}