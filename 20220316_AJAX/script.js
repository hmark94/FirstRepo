'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// XML HTTP request (ols school)

/* const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        //console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;

        countriesContainer.insertAdjacentHTML('beforeend', html)
        countriesContainer.style.opacity = 1;
    });
} */

/* getCountryData('usa');
getCountryData('china'); */
//getCountryData('hungary');

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
}
/*
const getCountryAndNeighbour = function (country) {

    // AJAX call
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        //console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // render country 1
        renderCountry(data);

        // Neighbour
        const [neighbour] = data.borders;

        if (!neighbour) return;

        // AJAX call 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour')
        })
    });
} */

//getCountryAndNeighbour('hungary');
//getCountryAndNeighbour('usa');
//getCountryAndNeighbour('china');


////////////////////////Callback hell
/* setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000); */
//////////////////////////////////////////

//const request = fetch('https://restcountries.com/v2/name/hungary');
/*
//console.log(request);
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            renderCountry(data[0])
        })
};
 */


//console.log(request);
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};



getCountryData('hungary')