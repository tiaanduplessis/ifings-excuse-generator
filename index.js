const getRandomExcuse = require('get-random-excuse')

const excuseElem = document.querySelector('.js-excuse')
const btnElem = document.querySelector('.js-btn')

function getRandom() {
    return getRandomExcuse({leads: "I'm working remotely today,"})
}

if(excuseElem && btnElem) {
    excuseElem.textContent = getRandom()
    btnElem.addEventListener('click', function() {
        excuseElem.textContent = getRandom()
    })
}