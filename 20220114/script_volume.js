'use strict';

const btn_up = document.getElementById('volume_up');
const btn_down = document.getElementById('volume_down');
let currentVolEl = document.getElementById('volume_current');
const mute_btn = document.getElementById('mute');

let actual_volume;
let volume = 2;
currentVolEl.textContent = volume;


btn_up.addEventListener('click', function () {
    if (volume < 12) {
        volume++;
        currentVolEl.textContent = volume;
    }
});

btn_down.addEventListener('click', function () {
    if (volume > 0) {
        volume--;
        currentVolEl.textContent = volume;
    }
});



mute_btn.addEventListener('click', function () {
    if (currentVolEl.textContent !== 'MUTE 🔇') {
        currentVolEl.textContent = 'MUTE 🔇';
        mute_btn.textContent = '🔈';
    } else if (currentVolEl.textContent === 'MUTE 🔇') {
        currentVolEl.textContent = volume;
        mute_btn.textContent = '🔇';
    }
})