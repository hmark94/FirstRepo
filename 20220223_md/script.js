'use strict';

//Input field
const myForm = document.querySelector('.question_input');
const question = document.querySelector('#question');
const ans1 = document.querySelector('#answer_1');
const ans2 = document.querySelector('#answer_2');
const ans3 = document.querySelector('#answer_3');
const ansNum = document.querySelector('#answer_num');

const button = document.querySelector('.save_btn');

//output field
const questOutBox = document.querySelector('.question_box');
const questionOut = document.querySelector('.question_output');
const ansOut1 = document.querySelector('.answer_out_1');
const ansOut2 = document.querySelector('.answer_out_2');
const ansOut3 = document.querySelector('.answer_out_3');


//Send data
button.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries();
    const response = await fetch('https://6179a8bcaa7f340017404bde.mockapi.io/api/v1/question/20', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    
    return result;
})

function ajaxrequest() {
    if (window.XMLHttpRequest) {
        const method = 'PUT';
        const url = 'https://6179a8bcaa7f340017404bde.mockapi.io/api/v1/question/20';
        const ajaxEnable = true;

        const xhrRequest = new XMLHttpRequest();

        xhrRequest.open(method, url, ajaxEnable)
        xhrRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhrRequest.onload = function () {
            const divElem = document.querySelector('.question_box');
            divElem.innerText = xhrRequest.responseXML?.querySelector('question_output').textContent;
        }
        xhrRequest.send()
    }
}

//post question
const question_value = question.value;
const answer1_value = ans1.value;
const answer2_value = ans2.value;
const answer3_value = ans3.value;
const correct_num = ansNum.value;

const sendValues = (e) => {
    e.preventDefault();
    
    const formData = new FormData(this);

    fetch('https://6179a8bcaa7f340017404bde.mockapi.io/api/v1/question/20', {
        method: 'get',
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.log(error)
    }) 

    let inputFields = {
        question: question_value,
        answer1: answer1_value,
        answer2: answer2_value,
        answer3: answer3_value,
    }
    
    document.querySelector('.question_output').innerHTML = inputFields.question;
    document.querySelector('.answer_out_1').innerHTML = inputFields.answer1;
    document.querySelector('.answer_out_2').innerHTML = inputFields.answer2;
    document.querySelector('.answer_out_3').innerHTML = inputFields.answer3;
}

button.addEventListener('clcik', sendValues)
button.addEventListener('click', ajaxrequest)