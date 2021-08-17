var introEl = document.querySelector("#intro");

var optionEl = document.querySelector("options");

var timerEl = document.querySelector("#countDown");
var final_scoreEl = document.querySelector('#Final_score');
var endEl = document.getElementById("end");
var timeLeft = 75;

var qCountEl = document.querySelector("#qCount")
// var finalEl = document.querySelector(".final");
var questionEl = document.getElementById("question");
var listEl = document.getElementById('Btnlist');
var Btn_container = document.querySelector('.lists');
var resultEl = document.querySelector('.result');
var resetEl = document.getElementById('reset');
var que_listsEl = document.querySelector('#que_lists');


// User Initital
var initialIn = document.querySelector("#initials");

// buttons

var startQuizBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var viewhighScoreBtn = document.getElementById("scores");
var restartBtn = document.querySelector("#restart");
var clearScoreBtn = document.querySelector("#clearScores");



//localStorage

// highscores
var highscoreEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scores = [];



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

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = `Time:${timeLeft}s`;

        if (timeLeft === 0 || qCount === questions.length) {
            clearInterval(timeInterval);
            que_listsEl.style.display = "none";
            endEl.style.display = "block";
            final_scoreEl.textContent = timeLeft;

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
startQuizBtn.onclick = startQuiz;



function setQuestion(qCount) {

    questionEl.textContent = questions[qCount].question

    for (let i = 0; i < questions[qCount].answers.length; i++) {

        var Btn = document.createElement('li');
        var answerBtns = document.createElement('button');
        Btn.appendChild(answerBtns);
        listEl.appendChild(Btn);
        answerBtns.textContent = questions[qCount].answers[i];
        answerBtns.setAttribute("data-response", questions[qCount].answers[i]);

    }

};


function buttonHandler(event) {
    event.preventDefault();

    var Btnresponse = event.target.getAttribute("data-response");

    var response = Btnresponse.split('.')[0];
    // console.log(resultEl);
    if (questions[qCount].correctAnswer === response) {
        resultEl.textContent = "Correct!"
    }

    else if (questions[qCount].correctAnswer !== response) {
        timeLeft = timeLeft - 10;
        resultEl.textContent = "Wrong!"
    }

    reset();
    qCount++;
    setQuestion(qCount);

};




function reset() {
    while (listEl.firstChild) {
        listEl.removeChild(listEl.firstChild);
    }
};



//Local Storage 
function setScore(event) {
    event.preventDefault();

    endEl.style.display = "none";
    highscoreEl.style.display = "block";

    var init = initialIn.value.toUpperCase();
    scores.push({ initials: init, points: timeLeft });
    scores = scores.sort((a, b) => {
        if (a.points < b.points) {
            return 1;

        } else {
            return -1;
        }

    });

    scoreListEl.innerHTML = "";
    for (let i = 0; i < scores.length; i++) {
        var list = document.createElement("li");
        list.textContent = `${scores[i].initials}; ${scores[i].points}`;
        scoreListEl.append(list);
    }
    addScores();
    showScores();
}

function addScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}

function showScores() {

    var addScoresList = JSON.parse(localStorage.getItem("scores"));

    if (addScoresList !== null) {
        scores = addScoresList;
    }
}

function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML = "";
}


submitBtn.addEventListener("click", setScore);
Btn_container.addEventListener("click", buttonHandler);
restartBtn.addEventListener("click", function () {
    highscoreEl.style.display = "none";
    introEl.style.display = "block";

    timeLeft = 75;
    timerEl.textContent = `Time:${timeLeft}s`;
});

clearScoreBtn.addEventListener("click", clearScores);

viewhighScoreBtn.addEventListener("click", function () {
    if (highscoreEl.style.display === "none") {
        highscoreEl.style.display = "block";
    } else if (highscoreEl.style.display === "block") {
        highscoreEl.style.display = "none";
    } else {
        return alert("No scores to show.");
    }

});