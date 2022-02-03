/* let adat1 = window.prompt('név');
let adat2 = window.prompt('kor');
let adat3 = window.prompt('beosztás'); */

let tomb = [];
for (let i = 0; i < 3; i++) {
    tomb.push(window.prompt('adatok'));
}

console.log(tomb);

let tomb2 = tomb;

console.log(tomb2);

let ujTomb = [];
for (let i = 0; i < 3; i++) {
    ujTomb.push(window.prompt('adatok'));
}
console.log(ujTomb);

