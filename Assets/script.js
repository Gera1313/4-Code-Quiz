let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-questions");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let countdown;

let saveScoreBtn = document.getElementById("save-score");
let viewScoresBtn = document.getElementById("view-scores");
let finalScoreDisplay = document.getElementById("final-score");

let count = 11;

// 10 questions array

const quizArray = [
  {
    id: "0",
    question: "What is the capital of Mexico?",
    options: ["DF", "Mexico City", "Mexico", "All of them"],
    correct: "All of them",
  },
  {
    id: "1",
    question: "What is the capital of Ethiopia?",
    options: ["Ankara", "Alofi", "Addis Ababa", "Antananarivo"],
    correct: "Addis Ababa",
  },
  {
    id: "2",
    question: "What is the capital of Kyrgyzstan?",
    options: ["Bishkek", "Bucharest", "Belgrade", "Pretoria"],
    correct: "Bishkek",
  },
  {
    id: "3",
    question: "What is the capital of Qatar?",
    options: ["Damascus", "Djibouti", "Dakar", "Doha"],
    correct: "Doha",
  },
  {
    id: "4",
    question: "What is the capital of Vietnam?",
    options: ["Saigon", "Hanoi", "Ho-Chi-Minh City", "Da Nang"],
    correct: "Hanoi",
  },
  {
    id: "5",
    question: "What is the capital of Slovenia?",
    options: ["Lusaka", "Ljubljana", "Luanda", "Lisbon"],
    correct: "Ljubljana",
  },
  {
    id: "6",
    question: "What is the capital of Cyprus?",
    options: ["Thessaloniki", "Oia", "Nicosia", "Naxos"],
    correct: "Nicosia",
  },
  {
    id: "7",
    question: "What is the capital of Chile?",
    options: ["San Jose", "San Juan", "Santiago", "Sofia"],
    correct: "Santiago",
  },
  {
    id: "8",
    question: "What is the capital of Georgia?",
    options: ["Tallinn", "Tirana", "Tiraspol", "Tbilisi"],
    correct: "Tbilisi",
  },
  {
    id: "9",
    question: "What is the capital of Malta?",
    options: ["Vaduz", "Victoria", "Valletta", "Vilnius"],
    correct: "Valletta",
  },
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
  document.querySelector(".score-page").classList.add("hide");

  //   hides the overlay when restarting
  document.getElementById("scores-overlay").classList.add("hide");
});

nextBtn.addEventListener("click", () => {
  questionCount += 1;

  if (questionCount === quizArray.length || count === 0) {
    displayContainer.classList.add("hide");
    userScore.innerHTML =
      "Your Score is " + scoreCount + " out of " + questionCount;
    finalScoreDisplay.innerText = scoreCount;
    document.querySelector(".score-page").classList.remove("hide");
    // shows the play again button at the end
    playAgainBtn.style.display = "block";
  } else {
    countOfQuestion.innerHTML =
      questionCount + 1 + " of " + quizArray.length + " Question";
    quizDisplay(questionCount);

    count = 11;
    clearInterval(countdown);
    timerDisplay();
    // hiddes the play again buton during the game
    playAgainBtn.style.display = "none";
  }
});

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count === 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");

  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);

  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Questions ";

    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    div.innerHTML += `<button class="option-div" onclick="checker(this)"> ${i.options[0]}</button><br><button class="option-div" onclick="checker(this)"> ${i.options[1]}</button><br><button class="option-div" onclick="checker(this)"> ${i.options[2]}</button><br><button class="option-div" onclick="checker(this)"> ${i.options[3]}</button>`;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let options = userOption.parentElement.querySelectorAll(".option-div");

    // disable options to prevent multiple choices
    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);

  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

// Handles saving the score to local storage when the user clicks the Save Score button

saveScoreBtn.addEventListener("click", () => {
  saveScore();
});

function saveScore() {
  let initials = document.getElementById("initials-input").value.toUpperCase();
  if (initials.trim() === "") {
    alert("Please enter your initials.");
    return;
  }

  // Creates object to store score and initials
  let scoreData = {
    score: scoreCount,
    initials: initials,
  };

  // Retrieve scores from local storage
  let existingScores = JSON.parse(localStorage.getItem("scores")) || [];

  //  Add new score to the array
  existingScores.push(scoreData);

  // Save the updated scores back to local storage
  localStorage.setItem("scores", JSON.stringify(existingScores));

  // Hides quiz container and shows score page
  displayContainer.classList.add("hide");
  scoreContainer.classList.add("hide");
  document.querySelector(".score-page").classList.remove("hide");

  // Displays the final score
  finalScoreDisplay.innerText = scoreCount;
}

// Handles displaying the score when the user clicks the View Score button
viewScoresBtn.addEventListener("click", () => {
  document.getElementById("scores-overlay").classList.remove("hide");
  displayScores();
});

document.getElementById("close-scores").addEventListener("click", () => {
  document.getElementById("scores-overlay").classList.add("hide");
});

function displayScores() {
  // retrieve scores from local storage
  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  //   sorts scores in descending order
  scores.sort((a, b) => b.score - a.score);

  console.log("Scores:", scores);

  // displays the scores in the modal
  let scoreList = document.getElementById("score-list");
  scoreList.innerHTML = "";

  scores.forEach((scoreData) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${scoreData.initials}: ${scoreData.score}`;
    scoreList.appendChild(listItem);
  });
}

// Play again button at the end of the game
let playAgainBtn = document.getElementById("play-again");

playAgainBtn.addEventListener("click", playAgain);

function playAgain() {
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
  document.querySelector(".score-page").classList.add("hide");
  document.getElementById("scores-overlay").classList.add("hide");
  playAgainBtn.style.display = "none";
  initial();
}
