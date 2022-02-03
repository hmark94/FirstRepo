/* let numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(i);
    console.log(i, numbers)
} */

/* let numbers = [1,2,3, 10];
let total = 0;
debugger;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total) */

/* let numbers = [1,2,3,4,5,6,7,8,9,10]


for (let i = 0; i < numbers.length; i++) {
    if ( i % 5 === 0 && i % 3 === 0) {
        console.log('fizzbuzz')
    }
    else if (i % 3 === 0) {
        console.log('fizz')
    }
    else if ( i % 5 === 0) {
        console.log('buzz')
    }
    else {
        console.log(numbers[i])
    }
}
 */








let pairs = [[1, 2], [3, 4], [5, 6]];
let sum = 0;

for (let i = 0; i < pairs.length; i++) {
    let current = pairs[i];
    console.log('kulso: ', 'i', i, pairs[i]);
    for (let j = 0; j < current.length; j++){
        console.log('belso:', 'j', j, current[j]);
        let szam = current[j];
        sum += szam;
    }
}
console.log(sum)