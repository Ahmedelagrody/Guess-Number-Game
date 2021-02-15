'use strict'

let current_Score = 20

let highscore = 0
let current_High_Score
let checkNummber

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

checkNummber = Math.trunc(Math.random() * 20) + 1

document.querySelector('.again').addEventListener('click', function () {
  checkNummber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.number').textContent = '?'
  document.querySelector('.number').style.width = '15rem'

  document.querySelector('body').style.backgroundColor = '#000000'
  current_Score = 20
  document.querySelector('.score').textContent = current_Score
  displayMessage('Start guessing')
  Number((document.querySelector('.guess').value = ''))
})

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  if (!guess) {
    displayMessage('there is N0 number here')
  } else if (guess === checkNummber) {
    document.querySelector('.number').textContent = checkNummber
    displayMessage('U entered the correct number')

    current_High_Score = current_Score

    if (current_High_Score > highscore) {
      highscore = current_High_Score
      document.querySelector('.highscore').textContent = current_High_Score
    } else if (current_High_Score <= highscore) {
      document.querySelector('.highscore').textContent = highscore
    }
    document.querySelector('.number').style.width = '30rem'

    document.querySelector('body').style.backgroundColor = '#60b347'
  } else if (current_Score > 1) {
    displayMessage(guess < checkNummber ? 'GO Higher' : 'GO Lower')

    current_Score--
    document.querySelector('.score').textContent = current_Score
  } else {
    document.querySelector('.message').textContent = 'You lost the game !'
  }
})
