function toggle() {
    let textButton = document.getElementsByClassName('button')[0];
    let moreInfo = document.getElementById('extra');

    if (moreInfo.style.display === 'none') {
        textButton.textContent = 'Less';
        moreInfo.style.display = 'block';
    } else {
        textButton.textContent = 'More';
        moreInfo.style.display = 'none';
    }
}