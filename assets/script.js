var introEl = document.querySelector("#intro");

var optionEl = document.querySelector("options");

var timerEl = document.querySelector("#countDown");

var endEl = document.getElementById("end");
var timeLeft = 75;
var viewhighScoreBtn = document.getElementById("scores");
var qCountEl = document.querySelector("#qCount")
var finalEl = document.querySelector(".final");


// buttons
var questionEl = document.getElementById("question");
var startQuizBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var listEl = document.getElementById('Btnlist');
var Btn_container = document.querySelector('.lists');
var resetEl = document.getElementById('reset');
var resultEl = document.querySelector('.result');

//localStorage

// highscores
var highscoreEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scores = [];



// var resultEl = document.querySelector('.');
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
    
    questionEl.textContent = questions[qCount].question 
   
    for (let i = 0; i < questions[qCount].answers.length; i++) {

        var Btn = document.createElement('li');
        var answerBtns = document.createElement('button');
        Btn.appendChild(answerBtns);
        listEl.appendChild(Btn);
        answerBtns.textContent = questions[qCount].answers[i];
        answerBtns.setAttribute("data-response", questions[qCount].answers[i] );
        
    }
    
};


function buttonHandler (event) {
    event.preventDefault();
    var Btnresponse = event.target.getAttribute("data-response");
  
    var response = Btnresponse.split('.')[0];
    // console.log(resultEl);
    if (questions[qCount].correctAnswer === response) {
        resultEl.textContent = "Correct!"
    }

    else if (questions[qCount].correctAnswer !== response){
        timeLeft = timeLeft - 10;
        resultEl.textContent = "Wrong!"
    }

    reset();
    qCount ++;
    setQuestion(qCount);
   
};




function reset (){
    while (listEl.firstChild) {
        listEl.removeChild(listEl.firstChild);
    }
};

  //Local Storage 
  function setScore (event) {
      event.preventDefault();
      console.log(scores);
    scores = scores.sort((a, b) => {
        if (a.points < b.points) {
            return 1;
        
        } else {
            return -1;
        }

    });
     
    scoreListEl.innerHTML = "";
    for (var i = 0; i < scores.length; i++) {
        var list = document.createElement("li");
        list.textContent = `${scores[i].intials}; ${scores[i].points}`;
        scoreListEl.append(li);
    }
    addScores();
    getScores();
  }

  function addScores() {
      localStorage.setItem("scores", JSON.stringify(scores));
  }

  function getScores () {

    var addScoresList = JSON.parse(localStorage.getItem("scores"));
    
    if (addScoresList !== null) {
        scores = addScoresList;
    }
  }



// submitBtn.onclick = localStorage();
Btn_container.addEventListener("click", buttonHandler);