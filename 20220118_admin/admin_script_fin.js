'use strict';

let dataBase = [
    {
        id: 0,
        fullname: 'Próba Balabán',
        username: 'probaba',
        isimage: false,
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

// variables, values
let table = document.querySelector('.table');
const fnameEl = document.querySelector('#fullName');
const unameEl = document.querySelector('#userName');
const avatarEl = document.querySelector('#avatarBox');
const emailEl = document.querySelector('#email');
const saveBtnEl = document.querySelector('.saveBtn');
const userNumber = document.querySelector('#numberOfUsers');
const avatarNumber = document.querySelector('#numberOfAvatars');
let newElObj = {};
let rIndex;

//openTab

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


//add row

function newElement() {
    let idVal = dataBase.length;
    let fnameVal = fnameEl.value;
    let unameVal = unameEl.value;
    let avatarVal = avatarEl.checked;
    let emailVal = emailEl.value;


    if (fnameVal === '' || unameVal === '' || emailVal === '') {
        alert('Fill all inputs!');
    } else {
        newElObj = { idVal, fnameVal, unameVal, avatarVal, emailVal };
        dataBase.push(newElObj);

        table.innerHTML += `<tr><td>${idVal}</td>
        <td>${fnameVal}</td>
        <td>${unameVal}</td>
        <td>${avatarVal ? '✅' : '❌'}</td>
        <td>${emailVal}</td>
        <td><button onclick="deleteElements()">❌</button></td>
        <td><button onclick="editElements()" >📝</button></td>
        </tr>`
    }

}

function editElements() {
    saveBtnEl.classList.remove('visible');
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            //console.log(rIndex);

            fnameEl.value = this.cells[1].innerHTML;
            unameEl.value = this.cells[2].innerHTML;
            avatarEl.checked = this.cells[3].innerHTML;
            emailEl.value = this.cells[4].innerHTML;
        }
    }
}

function saveNewElement() {
    saveBtnEl.classList.add('visible');

    let fname = fnameEl.value,
        uname = unameEl.value,
        avatar = avatarEl.checked,
        email = emailEl.value;

    table.rows[rIndex].cells[1].innerHTML = fname;
    table.rows[rIndex].cells[2].innerHTML = uname;
    table.rows[rIndex].cells[3].innerHTML = avatar;
    table.rows[rIndex].cells[4].innerHTML = email;
}

function deleteElements() {
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            table.deleteRow(rIndex);
        }
    }
    fnameEl.value = "";
    unameEl.value = "";
    avatarEl.checked = "";
    emailEl.value = "";
}

//add elements to table

for (let i = 1; i < dataBase.length; i++) {
    table.innerHTML += `<tr><td>${dataBase[i].id}</td>
        <td>${dataBase[i].fullname}</td>
        <td>${dataBase[i].username}</td>
        <td>${dataBase[i].isimage ? '✅' : '❌'}</td>
        <td>${dataBase[i].email}</td>
        <td><button onclick="deleteElements()">❌</button></td>
        <td><button onclick="editElements()" >📝</button></td>
        </tr>`
};

// Statisztika
userNumber.innerHTML = `Jelenleg <b>${table.rows.length - 1}</b> regisztrált felhasználó van`;


let avnum = 0;
for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].isimage === true) {
        avnum++;
    }
}
avatarNumber.innerHTML = `<b>${avnum}</b> felhasználó rendelkezik képpel`;

function refreshData() {
    userNumber.innerHTML = `Jelenleg <b>${table.rows.length - 1}</b> regisztrált felhasználó van`;


}
