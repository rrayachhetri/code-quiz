var introEl = document.querySelector("#intro");

var optionEl = document.querySelector("options");

var timerEl = document.querySelector("#countDown");

var endEl = document.getElementById("end");

var viewhighScoreBtn = document.getElementById("scores");
var qCountEl = document.querySelector("#qCount")
// buttons
var questionEl = document.getElementById("question");
var startQuizBtn = document.getElementById("start");

var ans1Btn = document.getElementById("ans1");
var ans2Btn = document.getElementById("ans2");
var ans3Btn = document.getElementById("ans3");
var ans4Btn = document.getElementById("ans4");


var qCount = 0;
  var questions = [ // array of obgetElementByIdjects
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
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = `Time:${timeLeft}s`;

        if (timeLeft === 0 || qCount === questions.length) {
            clearInterval(timeInterval);
            endEl.classList.remove('hide');
            // viewhighScoreBtn.textContent = ;
        }

    }, 1000);
}

//sections


// section questions
function startQuiz() {
   introEl.classList.add('hide');
    qCount = 0;

    stopWatch();
    setQuestion(qCount);
} 
startQuizBtn.onclick = startQuiz;


function setQuestion(qCount) {
    console.log("set question fn activated");
    questionEl.textContent = questions[qCount].question 
     
       
        ans1Btn.textContent = questions[qCount].answers[0];
        ans2Btn.textContent = questions[qCount].answers[1];
        ans3Btn.textContent = questions[qCount].answers[2];
        ans4Btn.textContent = questions[qCount].answers[3];
    
    
    
    
    
        //add Eventlistener to answer buttons
    //compare selected answer with correct answer
    //render correct or incorrect to webpage!
    //increment qCount by 1
    // then re-run setquestion fn
};

questions[qCount].answers[0];