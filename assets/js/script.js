// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // un-hide questions section
    questionsEl.removeAttribute("class");

    // start timer
    timerId = setInterval(clockTick, 1000);

    // show starting time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    // clear out any old question choices
    choicesEl.innerHTML = "";

    // loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
        // create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        // attach click event listener to each choice
        choiceNode.onclick = questionClick;

        // display on the page
        choicesEl.appendChild(choiceNode);
    });
}

function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalize time
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        // display new time on page
        timerEl.textContent = time;

        feedbackEl.textContent = "Wrong!";
    } else {
        feedbackEl.textContent = "Correct!";
    }

    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // stop timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // hide questions section
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== "") {
        // get saved scores from localstorage, or if not any, set to empty array
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        var newScore = {
            score: time,
            initials: initials
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // redirect to next page
        window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;

 Game();
startBox.addEventListener("click", function startGame() {
    if (startBox.style.display === "block") {
        startBox.style.display = "none";
        gameEl.style.display = "block";
    } else {
        startBox.style.display = "none";
        gameEl.style.display = "block";
    }
    var x = document.getElementById("time");
    setTimeout(function () { x.textContent = "0 seconds" }, 15000);
    setTimeout(function () { x.textContent = "1 seconds" }, 14000);
    setTimeout(function () { x.textContent = "2 seconds" }, 13000);
    setTimeout(function () { x.textContent = "3 seconds" }, 12000);
    setTimeout(function () { x.textContent = "4 seconds" }, 11000);
    setTimeout(function () { x.textContent = "5 seconds" }, 10000);
    setTimeout(function () { x.textContent = "6 seconds" }, 9000);
    setTimeout(function () { x.textContent = "7 seconds" }, 8000);
    setTimeout(function () { x.textContent = "8 seconds" }, 7000);
    setTimeout(function () { x.textContent = "9 seconds" }, 6000);
    setTimeout(function () { x.textContent = "10 seconds" }, 5000);
    setTimeout(function () { x.textContent = "11 seconds" }, 4000);
    setTimeout(function () { x.textContent = "12 seconds" }, 3000);
    setTimeout(function () { x.textContent = "13 seconds" }, 2000);
    setTimeout(function () { x.textContent = "14 seconds" }, 1000);

    setTimeout(function () {


        var scorecard = document.querySelector(".scoreCard");
        if (currentIndex < 3) {
            gameEl.style.display = "none";
            scorecard.style.display = "block";
            var percentage = document.querySelector("#percentage");
            percentage.style.fontSize = "12px";
            percentage.textContent = "Time is up, finish the game in time for a score";
        }
        else { return; }
    }, 15000);
    game();
});

//the game, after clicking start game
function game() {
    //setTimeout(function() {
    //replaces previous question
    theQuestion.textContent = questions[currentIndex].question;
    //should change all choices to the new question
    a.textContent = choices[currentIndex].a;
    b.textContent = choices[currentIndex].b;
    c.textContent = choices[currentIndex].c;
    d.textContent = choices[currentIndex].d;

}