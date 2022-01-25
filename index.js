const button = document.querySelector('button')
const fnInput = document.querySelector('.firstName')
const lnInput = document.querySelector('.lastName')
const emailInput = document.querySelector('.email')
const pwInput = document.querySelector('.password')
const fnIcon = document.querySelector('.fnErrorIcon')
const lnIcon = document.querySelector('.lnErrorIcon')
const emailIcon = document.querySelector('.emailErrorIcon')
const pwIcon = document.querySelector('.pwErrorIcon')
const fnErrorMsg = document.querySelector('.fnErrorMsg')
const lnErrorMsg = document.querySelector('.lnErrorMsg')
const emailErrorMsg = document.querySelector('.emailErrorMsg')
const pwErrorMsg = document.querySelector('.pwErrorMsg')

button.addEventListener('click', function () {
    if (fnInput.value === '') {
        event.preventDefault();
        fnIcon.style.display = 'block'
        fnErrorMsg.style.display = 'block'
    } if (lnInput.value === '') {
        event.preventDefault();
        lnIcon.style.display = 'block'
        lnErrorMsg.style.display = 'block'
    } if (emailInput.value === '') {
        event.preventDefault();
        emailIcon.style.display = 'block'
        emailErrorMsg.style.display = 'block'
    } if (emailInput.value.indexOf('@') === -1) {
        event.preventDefault();
        emailIcon.style.display = 'block'
        emailErrorMsg.style.display = 'block'
    }
    if (pwInput.value === '') {
        event.preventDefault();
        pwIcon.style.display = 'block'
        pwErrorMsg.style.display = 'block'
    }
})