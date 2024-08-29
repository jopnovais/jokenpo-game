const optionImages = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const userResult = document.querySelector('.user-result img')
const computerResult = document.querySelector('.computer-result img')
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const drawScoreElement = document.getElementById('draw-score');

const srcImages = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']

const checkWinner = {
    RR: 'Empate',
    RP: 'Computador Ganhou',
    RS: 'Você Ganhou',
    PP: 'Empate',
    PR: 'Você Ganhou',
    PS: 'Computador Ganhou',
    SS: 'Empate',
    SP: 'Você Ganhou',
    SR: 'Computador Ganhou'
}

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add('start')
    resultText.textContent = '...'
    userResult.src = computerResult.src = 'img/pedra.png'

    setTimeout(() => {
        container.classList.remove('start')

        userResult.src = srcImages[userIndex]

        const randomNumber = Math.floor(Math.random() * srcImages.length)
        computerResult.src = srcImages[randomNumber]

        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const  result= userValue + computerValue
        const finalResult = checkWinner[result]

        console.log(finalResult)

        resultText.textContent = finalResult

        if (finalResult === 'Você Ganhou') {
            userScore++;
            userScoreElement.textContent = userScore;
        } else if (finalResult === 'Computador Ganhou') {
            computerScore++;
            computerScoreElement.textContent = computerScore;
        } else {
            drawScore++;
            drawScoreElement.textContent = drawScore;
        }

    }, 2000)
}



optionImages.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})