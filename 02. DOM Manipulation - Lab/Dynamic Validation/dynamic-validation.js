function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let email = document.getElementById('email');
    email.addEventListener('change', function () {
        if (pattern.test(email.value.trim()) === false) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
        }
    });
}