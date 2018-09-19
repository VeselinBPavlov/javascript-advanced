function listBuilder(selector) {
    let container = $(selector);
    return {
        createNewList: function () {
            container.empty();
            container.append($('<ul>'));
        },
        addItem: function (item) {
            let li = $(`<li>${item}</li>`);
            let upBtn = $('<button>Up</button>');
            let downBtn = $('<button>Down</button>');
            li.appendTo($('ul'));
            upBtn.appendTo(li);
            downBtn.appendTo(li);
            
            upBtn.on('click', moveUp);
            downBtn.on('click', moveDown);
            
            function moveUp() {
                $(this).parent().insertBefore($(this).parent().prev());
            }
            function moveDown() {
                $(this).parent().insertAfter($(this).parent().next());
            }
        }
    }
}