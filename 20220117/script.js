'use strict';


let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 3;
let highscore = 0;

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(typeof guess);


    // NO input
    if (!guess) {
        //document.querySelector('.message').textContent = 'No number!⛔'
        displayMessage('No number!⛔');
        // correct guess
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'Correct Number!🥳'
        displayMessage('Correct Number!🥳');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // guess is higher
    } else if (guess > secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = 'Number is too high!';
            displayMessage('Number is too high!')
            score--;
            document.querySelector('.score').textContent = (`Még ${score} próbálkozásod van!`);
        } else {
           // document.querySelector('.message').textContent = 'You lost the game 😢';
           displayMessage('You lost the game 😢')
            document.querySelector('.score').textContent = 0;
        }

        // guess is lower
    } else if (guess < secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = 'Number is too low!';
            displayMessage('Number is too low!');
            score--;
            document.querySelector('.score').textContent = (`Még ${score} próbálkozásod van!`);
        } else {
            //document.querySelector('.message').textContent = 'You lost the game 😢';
            displayMessage('You lost the game 😢')

            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 3;
    secretNumber = Math.trunc(Math.random() * 10) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})