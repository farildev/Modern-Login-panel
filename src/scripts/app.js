const form  = document.querySelector('.form-control');
const email = document.getElementById('input');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
})

const setError = (element, message) = {

}

const validateInput = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(username.value == ''){
        console.log('validateInput');
    }
}