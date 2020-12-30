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
            { text: 'Ne', correct: true },
            { text: 'Da', correct: false }
        ]
    },
    {
        question: 'Omiljena hrana tvog decka?',
        answers: [
            { text: 'Pizza', correct: true },
            { text: 'Piletina', correct: false }
        ]
    },
    {
        question: 'Koju rec najvise mrzi?',
        answers: [
            { text: 'Igranje', correct: false },
            { text: 'Mazenje', correct: true }
        ]
    },
    {
        question: 'Dok se vozimo drzimo se za?',
        answers: [
            { text: 'Ruke', correct: true },
            { text: 'Kolena', correct: false }
        ]
    },
    {
        question: 'Voli da svrsi?',
        answers: [
            { text: 'Na sise', correct: false },
            { text: 'Na facu', correct: true }
        ]
    },
    {
        question: 'Jedno od navedenih imena mu se svidja?',
        answers: [
            { text: 'Tara', correct: true },
            { text: 'Nastasija', correct: false }
        ]
    },
    {
        question: 'Staje pomislio kad te je video?',
        answers: [
            { text: 'U kakvo dupe', correct: false },
            { text: 'U kako je lepa', correct: true }
        ]
    },
    {
        question: 'Cija se muzika slusa u kolima?',
        answers: [
            { text: 'Nikolina', correct: false },
            { text: 'Andrijanina', correct: true }
        ]
    },
    {
        question: 'Kada si raskinula?',
        answers: [
            { text: '23.', correct: true },
            { text: '21.', correct: false }
        ]
    },
    {
        question: 'Sta je bitnije da devojka ima?',
        answers: [
            { text: 'Sise', correct: false },
            { text: 'Dupe', correct: true }
        ]
    },
]