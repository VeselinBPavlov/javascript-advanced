function tableBuilder(selector) {
    let container = $(selector);
    return {
        createTable: function (columnNames) {
            container.empty();
            let table = $('<table>');
            let tableHead = $('<tr>');
            for (let head of columnNames) {
                $(`<th>${head}</th>`).appendTo(tableHead);
            }
            $(`<th>Action</th>`).appendTo(tableHead);
            table.appendTo(container);
            tableHead.appendTo(table);
        },
        fillData: function (dataRows) {
            for (let row of dataRows) {
                let tableRow = $('<tr>');
                for (let data of row) {
                    tableRow.append($('<td>').text(data));
                }

                let deleteBtn = $('<button>Delete</button>');
                deleteBtn.on('click', deleteItem);

                function deleteItem() {
                    $(this).parent().parent().remove();
                }

                tableRow.append($('<td>').append(deleteBtn));
                tableRow.appendTo($('table'));
            }
        }
    }
}