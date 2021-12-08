// 1.
// Szeretnénk tudni, hogy egy érték megtalálható-e egy tömbben.
// Irj fuggvenyt ami 2 parametert kap.
// Az elso parameter a tomb amiben keressuk az elemet.
// A masodik parameter az elem amit keresunk.
// Ha megtalalta az element terjen vissza true-val, ha nem akkor false-val.
// letezik([1,2,3,4], 0) => false
// letezik([1,2,3,4], 2) => true

// 2.
// Irj fuggvenyt ami 2 parametert kap.
// Az elso parameter a tomb amiben keressuk az elemet.
// A masodik parameter az elem amit keresunk.
// A fuggveny terjen vissza a megtalalt elem poziciojaval.
// letezik([1,2,3,4], 0) => -1, null, false, valami ami azt jeloli, 
// letezik([1,2,3,4], 2) => true
// letezik(['alma', 'korte'], 'alma') => true


//1.

function search(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return true;
        }
    } return false;
}

console.log(search([1, 2, 3, 4], 0));


//2. 

function search(array, x) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter++;
        if (array[i] === x) {
            return console.log("item is on position: " + counter);
        }
    } return console.log("Item not found");
}

// vagy

function kivalasztas(array, szam) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === szam) {
            return i;
        }
    } return null;
}

console.log(kivalasztas([3, 5, 7], 2)); //null