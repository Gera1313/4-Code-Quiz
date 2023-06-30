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
let count = 16
let countdown; 

// 10 questions array

const quizArray = [
    {
        id: "0",
        question: "What is the capital of Mexico?",
        options: [
            "DF",
            "Mexico City",
            "Mexico",
            "All of the above",
        ],
        correct: "All of the above",
    },
    {
        id: "1",
        question: "What is the capital of Ethiopia?",
        options: [
            "Ankara",
            "Alofi",
            "Addis Ababa",
            "Antananarivo",
        ],
        correct: "Addis Ababa",
    },
    {
        id: "2",
        question: "What is the capital of Kyrgyzstan?",
        options: [
            "Bishkek",
            "Bucharest",
            "Belgrade",
            "Pretoria",
        ],
        correct: "Bishkek",
    },
    {
        id: "3",
        question: "What is the capital of Qatar?",
        options: [
            "Damascus",
            "Djibouti",
            "Dakar",
            "Doha",
        ],
        correct: "Doha",
    },
    {
        id: "4",
        question: "What is the capital of Vietnam?",
        options: [
            "Saigon",
            "Hanoi",
            "Ho-Chi-Minh City",
            "Da Nang",
        ],
        correct: "Hanoi",
    },
    {
        id: "5",
        question: "What is the capital of Slovenia?",
        options: [
            "Lusaka",
            "Ljubljana",
            "Luanda",
            "Lisbon",
        ],
        correct: "Ljubljana",
    },
    {
        id: "6",
        question: "What is the capital of Cyprus?",
        options: [
            "Thessaloniki",
            "Oia",
            "Nicosia",
            "Naxos",
        ],
        correct: "Nicosia",
    },
    {
        id: "7",
        question: "What is the capital of Chile?",
        options: [
            "San Jose",
            "San Juan",
            "Santiago",
            "Sofia",
        ],
        correct: "Santiago",
    },
    {
        id: "8",
        question: "What is the capital of Georgia?",
        options: [
            "Tallinn",
            "Tirana",
            "Tiraspol",
            "Tbilisi",
        ],
        correct: "Tbilisi",
    },
    {
        id: "9",
        question: "What is the capital of Malta?",
        options: [
            "Vaduz",
            "Victoria",
            "Valletta",
            "Vilnius",
        ],
        correct: "Valletta",
    },
];