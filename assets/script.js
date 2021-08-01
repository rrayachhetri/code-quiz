var introEl = document.querySelector("#intro");

var que_listsEl = document.querySelector("#que_lists");
var qCount = 0;
var timerEl = document.querySelector("timer");
var timeLeft = 75;
var viewhighScoreEl = document.querySelector("#scores");

// buttons
var startQuizBtn = document.querySelector("#start");
var ans1Btn = document.querySelector("#ans1");
var ans2Btn = document.querySelector("#ans2");
var ans3Btn = document.querySelector("#ans3");
var ans4Btn = document.querySelector("#ans4");



  var questions = [ // array of objects
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

function stopWatch() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time:${timeLeft}s";

        if (timeLeft === 0 || qCount === que_lists.length) {
            clearInterval(timeInterval);
            viewhighScoreEl.textContent = timeLeft;
        }

    }, 1000);
}

//sections


// section questions
function startQuiz() {
    introEl.style.display = "none";
    que_listsEl.style.display = "block";
    qCount = 0;

    stopWatch();
    setQuestion(qCount);
} 
startQuizBtn.addEventListener("click", que_lists);

function setQuestion(id) {
    if (id < que_lists.length) {
       
        ans1Btn.textContent = que_lists[id].answers[0];
        ans2Btn.textContent = que_lists[id].answers[1];
        ans3Btn.textContent = que_lists[id].answers[2];
        ans4Btn.textContent = que_lists[id].answers[3];
    }
}


