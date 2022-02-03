//Név,Email,Osztályzat
//Nagy Elemér,nagy.elemer@gmail.com,5
//Kiss Éva,kiss.eva@gmail.com,3

let csv = "Név;E-mail;Osztályzat;Kiss Jolan;kiss.jolan@gmail.com;5;Nagy Péter;nagy.peter@gmail.com;3";
/* tartalom = [];
tartalom = csv.split(';');
console.log(tartalom);
 */
function toArray(csv, delimiter, omitHeader) {
    let tartalom = [];
    tartalom = csv.split(delimiter);
    let tomb1 = [];
    let tomb2 = [];
    let tomb3 = [];
    let tomb4 = [];

    for (let i = 0; i < tartalom.length; i++) {
        if (i < 3 && omitHeader === true) {
            tomb1.push(tartalom[i]);
        } else if (2 < i && i < 6) {
            tomb2.push(tartalom[i]);
        } else if (5 < i) {
            tomb3.push(tartalom[i]);
        }
    } tomb4.push(tomb1, tomb2, tomb3);
    return tomb4;
}
console.log(toArray(csv, ';', true));

function toString(array) {
    let csvSzoveg = array.join(",")
    return csvSzoveg;
}
console.log(toString(toArray(csv, ';', true)));

