const quizData =[
    {
        question: "How old is Florian?",
        a: '23',
        b: '24',
        c: '25',
        d: '26',
        correct: 'c'
    },
    {
        question: "What is the most used programming language in 2021?",
        a: 'C',
        b: 'C++',
        c: 'Java',
        d: 'Python',
        correct: 'a'
    },
    {
        question: "Who is the President of India in 2021?",
        a: 'Avul Pakir Jainulabdeen Abdul Kalam',
        b: 'Pratibha Devisingh Patil',
        c: 'Pranab Kumar Mukherjee',
        d: 'Ram Nath Kovind',
        correct: 'd'
    },
    {
        question: "How many continents are there in the world?",
        a: '9',
        b: '11',
        c: '6',
        d: '7',
        correct: 'd'
    },
    {
        question: "When did World War II End?",
        a: '1939',
        b: '1945',
        c: '1949',
        d: '1935',
        correct: 'b'
    }
];

const questionEl = document.getElementById('question');
const quiz= document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');
const answersEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deSelectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
     
}

function getSelected(){
    
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deSelectAnswer(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',() =>{
    
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2> You answered Conrrectly at ${score}/${quizData.length} questions. </h2> <button onClick="location.reload()">Reload</button>`;
            
        }
    }
    
    
});