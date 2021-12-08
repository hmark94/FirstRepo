/* let szoveg = window.prompt('Add meg a szöveget!');

if (szoveg.length <= 80) {
    console.log(szoveg)
} else {
    console.log(szoveg.substring(0, 77) + "...")
} */

let a = window.prompt('Add meg az a számot!');
let b = window.prompt('Add meg a b számot!');


if (Number(a) > Number(b)) {
    console.log('a' + '=' + a + ' nagyobb, mint' + ' b' + '=' + b);
}
else if (Number(a) == Number(b)){
    console.log('a' + '=' + a + ' és' + ' b' + '=' + b + ' egyenlő');
}  
else if (Number(a) < Number(b)) {
    console.log('b' + '=' + b + ' nagyobb, mint' + ' a' + '=' + a);
}