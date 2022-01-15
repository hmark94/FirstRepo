'use strict';

let fridge = [
    [  // first shelf
        {
            name: "milk",
            daysRemain: 4
        },
        {
            name: "yogurt",
            daysRemain: 6
        }
    ],


    [  // second shelf
        {
            name: "salami",
            daysRemain: 3
        },
        {
            name: "beer",
            daysRemain: 8
        }
    ],


    [  // third shelf
        {
            name: "lunch",
            daysRemain: 2
        },
        {
            name: "tomatoes",
            daysRemain: 4
        },
        {
            name: "cucumber",
            daysRemain: 3
        }
    ]
];

const nextDay_btn = document.getElementById('next_day');
const foodStuff = document.querySelector('.foodstuff');
//console.log(foodStuff);

nextDay_btn.addEventListener('click', function () {
    for (let i = 0; i < fridge.length; i++) {
        for (let j = 0; j < fridge[i].length; j++) {
            fridge[i][j].daysRemain--;
            if (fridge[i][j].daysRemain < 4) {
                foodStuff.classList.add('yellow')
            }
        }
    }
});

nextDay_btn.click();
