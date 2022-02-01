'use strict';

//LOGIN FORM

const buttonEl = document.querySelector('button');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const telEl = document.querySelector('#tel');


const loginFn = (e) => {
    e.preventDefault();
    let persData = {
        name: nameEl.value,
        email: emailEl.value,
        tel: telEl.value
    }

    document.querySelector('.showcase').classList.add('hidden');
    document.querySelector('.landing-page').classList.remove('hidden');
    
    document.querySelector('#data-name').innerHTML = persData.name;
    document.querySelector('#data-email').innerHTML = persData.email;
    document.querySelector('#data-tel').innerHTML = persData.tel;
}

buttonEl.addEventListener('click', loginFn);


//RESERVE page

//right sidebar seat reservation
const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const reserved = document.querySelector('#reserved-seat');
const total = document.querySelector('#price-seat');
const movieSelect = document.querySelector('#movie');
const seatPlaces = document.querySelector('#seat-place');

let seatNum, seatRow;
let ticketPrice = movieSelect.value;

//reserved seat and total
function updateSelectedSeat() {
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    //console.log(selectedSeat);
    const selectedSeatsCount = selectedSeat.length;


    reserved.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;


}

//selectcion
movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    updateSelectedSeat();
})

//click on the seat
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }

    updateSelectedSeat();

    if (e.target.classList.contains('selected')) {
        seatNum = e.target.innerHTML;
        seatRow = e.target.parentNode.firstElementChild.innerHTML;
        //console.log(seatNum, seatRow);

        seatPlaces.innerHTML += `${seatRow} sor, ${seatNum} szék, `
    } else {
        seatPlaces.innerHTML = ``;
    }

});