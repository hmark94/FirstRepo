let milyenadat = "abc";
let szamok = 2;

console.log('milyenadat: ' + isNaN(milyenadat));
console.log('szamok: ' + isNaN(szamok));


console.log('szamok: ' + Number.isNaN(szamok));

/* Logikai JS */

let bevanEKapcsolva = true;
let isUserLogged = false;
let showFlexboxColumn = false;

console.log(bevanEKapcsolva);

/* Feltételes szerkezet */

let open = true;

if (open)
    window.alert("Nyitva");
else
    window.alert("Zarva");

/* 1 igaz ág
    let feltetel = true/false;
    if (feltetel) {
        window.alert()
    }         
    */

/* 1 igaz 1 hamis ág 
let open = true;

if (open)
    window.alert("Nyitva");
else {
    window.alert("Zarva");
}
*/

/* Több igaz ág
let feltetel1 = true; 
let feltetel2 = false; 
let feltetel3 = false; 

if (feltetel1) {lefut ha az 1. igaz}
else if (feltetel2) {lefut ha 1. nem igaz, 2. igaz}
else if (feltetel3) {lefut ha 1., 2. nem igaz és 3. igaz} */

