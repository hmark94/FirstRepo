'use strict';

const btnCloseModal = document.querySelector('.close-modal');

btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    const unameVal = document.querySelector('#uname').value;
    const pswVal = document.querySelector('#psw').value;

    if (unameVal === 'admin' && pswVal === 'password') {
        window.location = 'admin.html'
    } else {
        alert('Wrong Username or Password!')
    }
})
