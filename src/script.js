import './style.css';

const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postCode = document.querySelector('#postcode');
const pass = document.querySelector('#pass');
const checkpass = document.querySelector('#checkpass');
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const postCodeRegExp = /[a-zA-z0-9]{4}\s[a-zA-z0-9]{3}/;
const allInputs = [email, country, postCode, pass, checkpass];
console.log(allInputs);

allInputs.forEach((input) => {
    const error = input.nextElementSibling;
    if (input.id == 'email') {
        input.addEventListener ('input', () => {
            const isValid = email.value.length === 0 || emailRegExp.test(email.value);
            if (!isValid) {
                error.textContent = 'DOES NOT COMPUTE';
            } else {
                error.textContent = '';
            }
            
        })        
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});