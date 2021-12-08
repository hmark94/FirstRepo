/* let szam1 = prompt('Első szám');
let szam2 = prompt('Második szám');
let szam3 = prompt('Harmadik szám'); */

/* if (szam1 > szam2 && szam1 > szam3) {
    alert(szam1 + ' nagyobb, mint ' + szam2 + ' és a' + szam3)
} else if (szam2 > szam1 && szam2 > szam3) {
    alert(szam2 + ' nagyobb, mint ' + szam1 + ' és a' + szam3)
} else if (szam3 > szam1 && szam3 > szam2) {
    alert(szam3 + ' nagyobb, mint ' + szam1 + ' és a' + szam2)
} else if (szam1 === szam2) {
    alert(szam1 + ' egyenlő ' + szam2)
} else if (szam1 === szam3) {
    alert(szam1 + ' egyenlő ' + szam3)
} else if (szam2 === szam3) {
    alert(szam2 + ' egyenlő ' + szam3)
} else {
    alert('Mindhárom szám egyenlő!')
} */

/* let napok = Math.floor(Math.random() * 10) + 1;

switch(napok) {
    case 1:
        console.log('Hétfő');
        break;
    case 2:
        console.log('Kedd');
        break;
    case 3:
        console.log('Szerda');
        break;
    case 4:
        console.log('Csütörtök');
        break;
    case 5:
        console.log('Péntek');
        break;
    case 6:
        console.log('Szombat');
        break;
    case 7:
        console.log('Vasárnap');
        break;
    default:
        console.log('Ilyen nap nincs!')
} */


//reverse
/* let n = 1234
function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(n))); */

// guess the number

/* let solution = Math.floor(Math.random() * 100);
let input = Number(prompt('Adj egy számot!'));

while (input != solution) {
    if (input > solution) {
        input = Number(prompt("kisebb számot kérek"));
    } else {
        input = Number(prompt("nagyobb számot kérek"));
    }
}

alert('nyertél'); */

/* let i = 1;
while (i < 100) {
    i++
    if (i % 2 === 0) {
        console.log(i)
    }
} */

let i = 1;
let sum = 0;

while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum)

