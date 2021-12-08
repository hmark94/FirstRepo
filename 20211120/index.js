/* let name1 = 'Bob';
let name2 = 'Cecil';

let book1 = 'Haboru es Beke';
let book2 = 'Voros es Fekete';

console.log(name1 + '-nal van a ' + book2);
console.log(name2 + '-nel van a ' + book1); */


/* Karakterszám */

/* let nev = window.prompt('Add meg a neved');
let length = nev.length;
console.log(length); */

/* Kérjük be egy téglalap adatait és jelenítsük meg a téglalap kerületét és területét.
 */

let aOldal = window.prompt('Add meg az A oldalt');
let bOldal = window.prompt('Add meg a B oldalt');

if (isNaN(aOldal) && isNaN(bOldal)) {
    window.alert('Csak számot adj meg!')
}
else {
    let terulet = aOldal * bOldal;
    let kerulet = (2 * aOldal + 2 * bOldal);

    console.log(terulet);
    console.log(kerulet);
};
