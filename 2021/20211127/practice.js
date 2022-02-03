// Dice throw FN

/* function diceTrhow(sides) {
    let result = Math.floor(Math.random() * sides) + 1;
    console.log(result);
}

diceTrhow(6);
diceTrhow(20);
diceTrhow(); //Undefined */

/* function sum(a, b) {
    console.log('a + b = ', a + b);
}

sum(5, 6); */

// összead 3 számot

/* function sum3(a, b, c) {
    console.log('a + b + c = ', a + b + c);
}

sum3(50, 24, 5) */


// átváltja 'em'-et 'px'-re

/* function changeEmToPx(em, base) {
    if (base === undefined) {
        base = 16;
    }
    console.log((base * em) + 'px')
    return base * em;
}

changeEmToPx(10, 16) */


/* function szorzo11(a) {
    return a * 11;
}

console.log(szorzo11(100))

function isEven(b) {
    if ( (b) % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(100));
console.log(isEven(101));

function negyzete(c) {
    return c * c;
}
console.log(negyzete(5));
*/

/* function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

console.log(rand(1, 6)); */

/* function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
} */


/* function countDown(f) {
    for (number = f; number >= 0; number--) {
        console.log(number)
    }
}

countDown(10); */

/* function count(until, step) {
    if (step === undefined){
        step = 1;
    }
    let szam = 0;
    for (let i = 0; i <= until; i += step){
        szam += i;
        console.log(i)
    }
    return szam;
}

count(100, 2); */

/* let tomb = [1, 2, 3, 4];

function isThere(numb) {
    if (numb === undefined) {
        return 0;
    } else {
        for (let i = 0; i < tomb.length; i++) {
            if (numb === tomb[i]) {
                return true
            }
        }
    } return false
}

console.log(isThere(5)); */

// Szorzótábla

/* function szorzotabla(n) {
    for (let i = 0; i <= Math.max(n, 10); i++) {
        console.log(n + ' x ' + i + ' =' + (n * i));
    }
}

szorzotabla(5);

function dogAge(numb) {
    let emberev = 7 * numb;
    return emberev
}
console.log(dogAge(4));

function celsiusToFahrenheit(c) {
    return (c / 5) * 9 + 32;
}
console.log(celsiusToFahrenheit(50));

function fahrenheitToCelsius(f) {
    return ((f - 32) * 5 / 9);
}
console.log(fahrenheitToCelsius(50));

 */


//function reverseArray(szoveg) 
/* {
    let splitString = szoveg.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
} */
/* {
    return szoveg.split('').reverse().join('');
} */
// console.log(reverseArray("Olivér"));

