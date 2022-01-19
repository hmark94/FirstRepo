'use strict';

let dataBase = [
    {
        id: 0,
        fullname: 'Próba Balabán',
        username: 'probaba',
        isimage: true,
        email: 'probaba@yahoo.com',
        imageurl: 'https://i.pravatar.cc/300'
    },
    {
        id: 1,
        fullname: 'Kiss Jolán',
        username: 'bekalab',
        isimage: true,
        email: 'bekalab23@yahoo.com',
        imageurl: 'https://i.pravatar.cc/300'
    },
    {
        id: 2,
        fullname: 'John Doe',
        username: 'JoDo',
        isimage: true,
        email: 'johndoe@gmail.com',
        imageurl: 'https://i.pravatar.cc/300'
    },
    {
        id: 3,
        fullname: 'Karo Lina',
        username: 'charol77',
        isimage: false,
        email: 'charol92@yahoo.com',
        imageurl: 'https://i.pravatar.cc/300'
    },
    {
        id: 4,
        fullname: 'Nick Adams',
        username: 'NickA',
        isimage: false,
        email: 'nickadam@yahoo.com',
        imageurl: 'https://i.pravatar.cc/300'
    },
    {
        id: 5,
        fullname: 'Anna Christie',
        username: 'AnnChr',
        isimage: true,
        email: 'annamanna@aol.com',
        imageurl: 'https://i.pravatar.cc/300'
    },
]

let newelementObj = {};
const tbodyEl = document.querySelector('.table');
const tableRow = document.querySelector('.tablerow');


function openTab(evt, tabName) {

    let tabcontent, tablinks;

    tabcontent = document.querySelectorAll(".tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.querySelectorAll(".tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.querySelector(`#${tabName}`).style.display = "block";
    evt.currentTarget.className += " active";
}

function newElement() {

    let idEl = dataBase.length;
    let fullNameEl = document.querySelector('#fullName').value;
    let userNameEl = document.querySelector('#userName').value;
    let isImageEl = document.querySelector('#avatarBox').checked;
    let emailEl = document.querySelector('#email').value;

    newelementObj = { idEl, fullNameEl, userNameEl, isImageEl, emailEl };
    dataBase.push(newelementObj);

    if (isImageEl === true) {
        tbodyEl.innerHTML += `<tr><td>${idEl}</td>
        <td>${fullNameEl}</td>
        <td>${userNameEl}</td>
        <td>✅</td>
        <td>${emailEl}</td>
        <td><button class="deleteBtn">❌</button></td>
        <td><button class="editBtn">edit</button></td>
        </tr>`
    } else {
        `<tr><td>${idEl}</td>
        <td>${fullNameEl}</td>
        <td>${userNameEl}</td>
        <td>-</td>
        <td>${emailEl}</td>
        <td><button class="deleteBtn">❌</button></td>
        <td><button class="editBtn">edit</button></td>
        </tr>`
    }

}

function deleteElement(e) {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }

    const btn = e.target;
    btn.closest('tr').remove();
}



tbodyEl.addEventListener('click', deleteElement);



for (let i = 1; i < dataBase.length; i++) {
    if (dataBase[i].isimage === true) {
        tbodyEl.innerHTML += `<tr><td>${dataBase[i].id}</td>
        <td>${dataBase[i].fullname}</td>
        <td>${dataBase[i].username}</td>
        <td>✅</td>
        <td>${dataBase[i].email}</td>
        <td><button class="deleteBtn">❌</button></td>
        <td><button class="editBtn">edit</button></td>
        </tr>`
    } else {
        tbodyEl.innerHTML += `<tr><td>${dataBase[i].id}</td>
        <td>${dataBase[i].fullname}</td>
        <td>${dataBase[i].username}</td>
        <td>-</td>
        <td>${dataBase[i].email}</td>
        <td><button class="deleteBtn">❌</button></td>
        <td><button class="editBtn">edit</button></td>
        </tr>`
    }
}
