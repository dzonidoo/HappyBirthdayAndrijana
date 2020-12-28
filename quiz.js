const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [{
        question: 'Da li ste dobili ruzu na prvom sastanku?',
        answers: [
            { text: 'NE', correct: true },
            { text: 'DA', correct: false }
        ]
    },
    {
        question: 'Omiljena hrana tvog decka?',
        answers: [
            { text: 'PIZZA', correct: true },
            { text: 'PILETINA', correct: false }
        ]
    },
    {
        question: 'Koju rec najvise mrzi?',
        answers: [
            { text: 'IGRANJE', correct: false },
            { text: 'MAZENJE', correct: true }
        ]
    },
    {
        question: 'Sta radimo dok se vozimo?',
        answers: [
            { text: 'DRZIMO SE ZA RUKE', correct: true },
            { text: 'DIRAMO KOSU', correct: false }
        ]
    },
    {
        question: 'Voli da svrsi?',
        answers: [
            { text: 'NA SISE', correct: false },
            { text: 'NA FACU', correct: true }
        ]
    },
    {
        question: 'Jedno od navedenih imena mu se svidja?',
        answers: [
            { text: 'TARA', correct: true },
            { text: 'NASTASIJA', correct: false }
        ]
    },
    {
        question: 'Staje pomislio kad te je video?',
        answers: [
            { text: 'U KAKVO DUPE', correct: false },
            { text: 'U KAKO JE LEPA', correct: true }
        ]
    },
    {
        question: 'Sta je spreman da prepolovi?',
        answers: [
            { text: 'ZEMLJU', correct: false },
            { text: 'NEBO', correct: true }
        ]
    },
    {
        question: 'Kada si raskinula?',
        answers: [
            { text: '23.', correct: true },
            { text: '25.', correct: false }
        ]
    },
    {
        question: 'Na sta se lozi?',
        answers: [
            { text: 'SISE', correct: false },
            { text: 'DUPE', correct: true }
        ]
    },
]