function create(sentences) {
    let container = document.getElementById('content');

    for (let sentence of sentences) {
        let newDiv = document.createElement('div');
        let newParagraph = document.createElement('p');

        newDiv.appendChild(newParagraph);
        container.appendChild(newDiv);

        newParagraph.textContent = sentence;
        newParagraph.style.display = 'none';

        newDiv.addEventListener('click', function () {
            newParagraph.style.display = 'block';
        })
    }
}