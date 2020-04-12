// list of all questions, choices, and answers
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
//set highscore board
var viewScores = document.querySelector(".viewHighscores");
if (viewScores.textContent = null) { } else {
    //viewScores.textContent = parseInt(localStorage.getItem('scored'));
    let div = document.createElement('div');
    div.innerHTML = JSON.parse(localStorage.getItem('scored'))
    viewScores.appendChild(div);
}
// var score = 0;
// var submit = document.querySelector("#submit");
// submit.addEventListener("click", function (event) {
//     event.preventDefault();

//     //getting choice of user
//     var checkedRadio = document.querySelector('.radio:checked');
//     var answer;
//     if (checkedRadio === null) {
//         answer = -9;
//     } else {
//         answer = checkedRadio.value;
//     }
//     //console.log(answer);
//     //console.log("check if right");
//     currentIndex++;
//     game();
//     //compare answer and user answer. update score
//     if (answer == questions[currentIndex - 1].answer) {
//         score++;
//     } else { score; }
//     console.log(score);

//     //clear radio
//     checkedRadio.checked = false;


//     //endgame
//     if (currentIndex === 3) {
//         console.log(score);
//         console.log("game over");
//         var scorecard = document.querySelector(".scoreCard");
//         var percentage = document.querySelector("#percentage");
//         scorecard.style.display = "block";
//         gameEl.style.display = "none";
//         var scored = score / 3 * 100
//         var scored = scored.toFixed(2);
//         //console.log(scored + "%");
//         percentage.textContent = scored + "%";

//         //store/get/creatediv and append it to scoreboard
//         var viewScores = document.querySelector(".viewHighscores");
//         localStorage.setItem("scored", JSON.stringify(scored));
//         newDiv = document.createElement("div");
//         newDiv.textContent = scored;
//         viewScores.appendChild(newDiv);
//     }
//     //console.log("hi");

// });

// //array of answer choice objects
// var choices = [
//     {
//         a: 'strings',
//         b: 'booleans',
//         c: 'alerts',
//         d: 'numbers'
//     },
//     {
//         a: 'quotes',
//         b: 'curly brackets',
//         c: 'booleans',
//         d: 'squere brackets'
//     },
//     {
//         a: 'numbers and strings',
//         b: 'other arrays',
//         c: 'JaxSon',
//         d: 'all of the above'
//     },
//     {
//         a: 'commas',
//         b: 'curly brackets',
//         c: 'quotes',
//         d: 'parentheses'
//     }];
// //get the elements by selectors
// var currentIndex = 0;
// var theQuestion = document.querySelector(".question");
// var a = document.querySelector("#a");
// var b = document.querySelector("#b");
// var c = document.querySelector("#c");
// var d = document.querySelector("#d");
// var gameEl = document.querySelector(".game");
// var startBox = document.querySelector(".start");

// //initializing the game
// //Game();
// startBox.addEventListener("click", function startGame() {
//     if (startBox.style.display === "block") {
//         startBox.style.display = "none";
//         gameEl.style.display = "block";
//     } else {
//         startBox.style.display = "none";
//         gameEl.style.display = "block";
//     }
//     var x = document.getElementById("time");
//     setTimeout(function () { x.textContent = "0 seconds" }, 15000);
//     setTimeout(function () { x.textContent = "1 seconds" }, 14000);
//     setTimeout(function () { x.textContent = "2 seconds" }, 13000);
//     setTimeout(function () { x.textContent = "3 seconds" }, 12000);
//     setTimeout(function () { x.textContent = "4 seconds" }, 11000);
//     setTimeout(function () { x.textContent = "5 seconds" }, 10000);
//     setTimeout(function () { x.textContent = "6 seconds" }, 9000);
//     setTimeout(function () { x.textContent = "7 seconds" }, 8000);
//     setTimeout(function () { x.textContent = "8 seconds" }, 7000);
//     setTimeout(function () { x.textContent = "9 seconds" }, 6000);
//     setTimeout(function () { x.textContent = "10 seconds" }, 5000);
//     setTimeout(function () { x.textContent = "11 seconds" }, 4000);
//     setTimeout(function () { x.textContent = "12 seconds" }, 3000);
//     setTimeout(function () { x.textContent = "13 seconds" }, 2000);
//     setTimeout(function () { x.textContent = "14 seconds" }, 1000);

//     setTimeout(function () {


//         var scorecard = document.querySelector(".scoreCard");
//         if (currentIndex < 3) {
//             gameEl.style.display = "none";
//             scorecard.style.display = "block";
//             var percentage = document.querySelector("#percentage");
//             percentage.style.fontSize = "12px";
//             percentage.textContent = "Time is up, finish the game in time for a score";
//         }
//         else { return; }
//     }, 15000);
//     game();
// });

// //the game, after clicking start game
// function game() {
//     //setTimeout(function() {
//     //replaces previous question
//     theQuestion.textContent = questions[currentIndex].question;
//     //should change all choices to the new question
//     a.textContent = choices[currentIndex].a;
//     b.textContent = choices[currentIndex].b;
//     c.textContent = choices[currentIndex].c;
//     d.textContent = choices[currentIndex].d;

// }

// //view highscores
// var hsLink = document.querySelector("#highscores");
// var viewScores = document.querySelector(".viewHighscores");

// hsLink.addEventListener("click", function showHighscores() {
//     if (viewScores.style.display === "none") {
//         viewScores.style.display = "block";
//     } else {
//         viewScores.style.display = "none";
//     }
// });
// function printHighscores() {
//     // either get scores from localstorage or set to empty array
//     var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

//     // sort highscores by score property in descending order
//     highscores.sort(function (a, b) {
//         return b.score - a.score;
//     });

//     highscores.forEach(function (score) {
//         // create li tag for each high score
//         var liTag = document.createElement("li");
//         liTag.textContent = score.initials + " - " + score.score;

//         // display on page
//         var olEl = document.getElementById("highscores");
//         olEl.appendChild(liTag);
//     });
// }

// function clearHighscores() {
//     window.localStorage.removeItem("highscores");
//     window.location.reload();
// }

// document.getElementById("clear").onclick = clearHighscores;

// // run function when page loads
// printHighscores();