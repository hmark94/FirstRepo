//Kiválogatás egy tömbből

/* let tomb = [-1, -2, 5, 2, 3, 1];
let tomb2 = []

for(let index = 0; index < tomb.length; index++) {
    if (tomb[index] > 0) {
    tomb2.push(tomb[index])
    }
}

console.log(tomb2); */

// maximum keresés

let tomb = [-1, -2, 5, 2, 3, 1];
let legnagyobb = 0;


for(let i = 0; i < tomb.length; i++) {
    if (tomb[i] > legnagyobb) {
        legnagyobb = tomb[i];
    }
}
/* console.log(legnagyobb); */


// feltételes maximum keresés (plusz feltételek esetén)

let tomb2 = [1, 2, 232, 4, 123, 298, -5, 333];
let legnagyobb2 = 0;

for(let i = 0; i < tomb2.length; i++) {
    if (tomb2[i] > legnagyobb2 && tomb2[i] % 2 == 0) {
        legnagyobb2 = tomb2[i];
    }
}
/* console.log(legnagyobb2); */

let user = [{
    fullName: 'Kis Jolán',
    kor: 50,
    város: 'Budapest',
},
{
    fullName: 'Nagy Pityu',
    kor: 20,
    város: 'Vác',
},
{
    fullName: 'Kovács Pista',
    kor: 50,
    város: 'Zalaegerszeg',
},
{
    fullName: 'Kovács Tihamér',
    kor: 70,
    város: 'Zalaegerszeg',
}
];

let talalat = {},
i = 0;
while(i < user.length) {
    if (user[i].fullName == 'Kis Jolán'){
        talalat = user[i];
        break;
    }
    i++;
}

console.log(talalat);