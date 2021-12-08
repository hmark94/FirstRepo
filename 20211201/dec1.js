/* //random (min, max)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function d6() {
    return random(1, 6);
}

function testRandomDiceThrow() {
    let results = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 1000; i++) {
       let kockadobas = d6();
        results[kockadobas - 1] = results[kockadobas - 1] +1;
    }
    return results;
}

console.log(results); */

let tombocske = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let eredmeny = 0;

function osszegzes() {
    for (let i = 0; i < tombocske.length; i++) {
        eredmeny += tombocske[i];
    }
    return eredmeny;
}
console.log(eredmeny);

