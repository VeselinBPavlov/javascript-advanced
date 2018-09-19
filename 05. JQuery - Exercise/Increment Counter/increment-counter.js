function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $("<textarea>");
    textArea.addClass("counter");
    textArea.attr("disabled", "disabled");
    textArea.val("0");

    let incrementBtn = $("<button class='btn' id='incrementBtn'>Increment</button>");
    let addBtn = $("<button class='btn' id='addBtn'>Add</button>");
    let ul = $("<ul class='results'></ul>");

    $(fragment)
        .append(textArea)
        .append(incrementBtn)
        .append(addBtn)
        .append(ul);
    $(fragment).appendTo(container);

    incrementBtn.on("click", addOne);
    addBtn.on("click", displayNum);

    function displayNum() {
        $("<li>").text(`${textArea.val()}`).appendTo(ul);
    }

    function addOne() {
        let num = textArea.val();
        textArea.val(`${+num + 1}`)
    }
}
