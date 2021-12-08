let phoneNumbers = [3630792765, 3630369549, 3620797249, 3670129465, 3630735165, 3630799685, 3630294765, 3630739572, 3630792388, 3630792947, 3630798965, 3630799284, 3630793325, 3630799685, 3630194265,];
let names = ['Bandobras Underhill', 'Robin Gardner', 'Isembold Whitfoot', 'Donnamira Galbassi', 'Bungo Baggins', 'Will Sandyman', 'Isengrim Proudfoot', 'Frodo Baggins', 'Amaranth Gaukrogers', 'Trahand Bunce', 'Will Sandyman', 'Halfred Goodchild', 'Bilbo Baggins', 'Will Sandyman', 'Belba Sandheaver'];

// Emailek, amikkel nem kell semmit csinalni egyelore
let emails = ['paulnoel21@agung002.com', 'weegrah1@eeothno.com', 'johnjohn69@hungta2.com', 'johnjohn69@hungta2.com', 'yuzhakova1960@hungta2.com', 'yuzhakova1960@hungta2.com', 'lemonkakiska@cggup.com', 'lemonkakiska@cggup.com', 'bd8axwy@cuendita.com', 'bd8axwy@cuendita.com', 'gasg@supok.site', 'gasg@supok.site', 'zaqman@pianoxltd.com', 'zaqman@pianoxltd.com'];

function creatPhoneBook(names, phoneNumbers) {
    let myPhoneBook = [];
    for (let i = 0; i < names.length; i++) {
        let person = {
            name: names[i],
            mobile: phoneNumbers[i]
        };
        myPhoneBook.push(person);
    }

    return myPhoneBook;
}
// console.log(add(names, phoneNumbers));

let myPhoneBook = creatPhoneBook(names, phoneNumbers);

function add(teloKonyv, nev, teloszam) {
    let newPerson = {
        name: nev,
        mobile: teloszam
    };
    if (teloszam == 'undefined') {
        teloszam = null;
    } else {
        teloKonyv.push(newPerson);
        return teloKonyv;
    }
}


add(myPhoneBook, 'Mark', 36701234567);
add(myPhoneBook, 'Mark', 36707894561);
add(myPhoneBook, 'Mark', 36709874561);

function findByMobile(myPhoneBook, telszam) {
    for (let i = 0; i < myPhoneBook.length; i++) {
        if (myPhoneBook[i].mobile == telszam) {
            return myPhoneBook[i];
        }
    } return null;
}
// console.log(findByMobile(myPhoneBook, 36701234566));

function findByName(myPhoneBook, nev) {
    for (let i = 0; i < myPhoneBook.length; i++) {
        if (myPhoneBook[i].name == nev) {
            return myPhoneBook[i];
        }
    } return null;
}

function indexByMobile(myPhoneBook, telszam) {
    for (let i = 0; i < myPhoneBook.length; i++) {
        if (myPhoneBook[i].mobile == telszam) {
            return i;
        }
    } return -1;
}
// console.log(indexByMobile(myPhoneBook, 36701234567));

function indexByName(myPhoneBook, nev) {
    for (let i = 0; i < myPhoneBook.length; i++) {
        if (myPhoneBook[i].name == nev) {
            return i;
        }
    } return -1;
}
// console.log(indexByMobile(myPhoneBook, 'Bandobras Underhill'));

function find(myPhoneBook, value) {
    if (typeof value == 'string') {
        return findByName(myPhoneBook, value);
    }
    if (typeof value == 'number') {
        return findByMobile(myPhoneBook, value);
    }
}
//console.log(find(myPhoneBook, 'Mark'));
//console.log(find(myPhoneBook, 36701234567));

function filterByName(myPhoneBook, nev) {
    let tomb = [];
    for (let i = 0; i < myPhoneBook.lenth; i++){
        if (myPhoneBook[i].name == nev) {
            tomb.push(i);
            return tomb;
        }
    } return null;
}
console.log(filterByName(myPhoneBook, 'Mark'));