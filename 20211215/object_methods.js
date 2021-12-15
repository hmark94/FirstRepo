let math = {
    min: function (valueA, valueB) { return valueA < valueB ? valueA : valueB },
    max: function (valueA, valueB) { return valueA > valueB ? valueA : valueB },
    average: function (arr) {
        let sum = 0;
        let db = 0;
        for (let i = 0; i < arr.length; i++) {
            if (this.isIntNumber(arr[i])) {
                sum += arr[i];
                db++
            }
        }
        return sum / db;
    },
    isIntNumber: function (value) {
        let parsedValue = parseInt(value);
        if (parsedValue && !isNaN(parsedValue)) {
            return true;
        }
        return false;
    }
}

console.log(math.min(2, 300));

// Object methodusok

let math2 = Object.assign({}, math);
console.log(math2);

Object.entries(math) // visszaadja egy tömbben a kulcs- / értékpárokat

Object.keys(math) // visszaadja a property neveket

Object.values(math) // visszaadja a property értékeket

math.hasOwnProperty('average'); // van e az adott propertyje

class Animal {
    #age;

    constructor(nameOfAnimal, animalAge) {
        this.animalName = nameOfAnimal;
        this.#age = animalAge
    }

    walk() {
        console.log(this.animalName+' sétál!');
    }

    setName(nameOfAnimal) {
        this.animalName = nameOfAnimal;
    }
    getName() {
        return this.animalName;
    }
    setAge(animalAge) {
        this.#age = animalAge;
    }
    getAge() {
        return this.#age;
    }
}

class Circle {
    #hiddenRadius;

    constructor(customRadius) {
        this.#hiddenRadius = customRadius;
    }
    get radius() {
        return this.#hiddenRadius;
    }
    set radius(newRadius) {
        this.#hiddenRadius = newRadius;
    }
    getradius() {
        return this.#hiddenRadius; // getter / setter methodus
    }
    setradius(newRadius) {
        this.#hiddenRadius = newRadius;
    }
}

let smallCircle = new Circle(3);
console.log(smallCircle.radius);

class Plant {
    plantType;
}

class Fruit extends Plant { //örökli a Plant objektum propertyjeit
    fruitType;
}

