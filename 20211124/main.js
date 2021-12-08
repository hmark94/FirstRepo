/* 
let myString = window.prompt('Ide írd a szöveget!');
let spaceCount = (myString.split(" ").length - 1);

console.log(spaceCount)
 */


// for változóval

/* let sz = window.prompt();
let spaceNum = 0;

for (let i = 0; i < sz.length; i++) {

    if (sz[i] == ' ') {
        spaceNum++;
    }

    console.log('Ciklus változó: ', i, sz[i])
} */


/* let spaceNumWhile = 0;
let charIndex = 0;
while (charIndex < sz.lenght - 1) {
    if (sz[charIndex] == ' ') {
        spaceNumWhile++;
    }
    charIndex++
}

console.log(spaceNum);
console.log(spaceNumWhile); */

//Egy tömben pozitív és negatív számok, számolja össze a pozitívokat

/* let tomb = [-1, -2, 0, 1, 2, 3, 4, 5, 'egy', 'kutya', false];
let pozitiv = 0; */
//forEach
/* tomb.forEach((i) => {
if (i > 0) {
    pozitiv++;
}})
console.log(pozitiv); */

// for loop
/* for (let i = 0; i < tomb.length; i++){
    if (tomb[i] > 0){
        pozitiv++
    }
}
console.log(pozitiv); */


/* let sum = 0;
for (let i = 0; i < tomb.length; i++) {
    if (isNaN(tomb[i]) === false && typeof tomb[i] !== "Boolean") {
        sum += tomb[i];
    }
} */
/* console.log(sum); */

let tomb = [1, 2, , 5, 2, 3, 1];
let keresettErtek = 5;
let vanKeresettElem = false;

for(let index = 0; index < tomb.length; index = index + 1) {
    if (tomb[index] == keresettErtek) {
    vanKeresettElem = true;
    }
}

if (vanKeresettElem) {
    console.log("igen van a tombben keresett elem")
} else {
    console.log("Nincs a tömbben keresett elem")
}