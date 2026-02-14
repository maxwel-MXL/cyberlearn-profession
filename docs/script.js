// ================= LOGIN SYSTEM =================

function login() {
  let username = document.getElementById("username");

  if (!username) return;

  let value = username.value;

  if (value.trim() === "") {
    alert("Enter username");
    return;
  }

  localStorage.setItem("user", value);
  window.location.href = "dashboard.html";
}

// ================= MODULE 3 QUIZ SYSTEM =================

let currentQuestion = 0;
let score = 0;
const passMark = 10;

const quizData = [
  {
    question: "What is the main goal of cybersecurity?",
    answers: ["Entertainment", "Protect systems and data", "Speed up internet"],
    correct: 1
  },
  {
    question: "Which of these is malware?",
    answers: ["Firewall", "Virus", "Router"],
    correct: 1
  },
  {
    question: "Phishing attacks mainly target:",
    answers: ["Hardware", "Human users", "Cables"],
    correct: 1
  },
  {
    question: "Confidentiality ensures:",
    answers: ["Data is secret", "Data is fast", "Data is colorful"],
    correct: 0
  },
  {
    question: "Integrity ensures:",
    answers: ["Data is changed", "Data is accurate", "Data is deleted"],
    correct: 1
  },
  {
    question: "Availability ensures:",
    answers: ["System access when needed", "System shutdown", "System formatting"],
    correct: 0
  }
];

function loadQuiz() {
  if (!document.getElementById("question")) return;
  showQuestion();
}

function showQuestion() {
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");

  questionEl.innerText = quizData[currentQuestion].question;
  answersEl.innerHTML = "";

  quizData[currentQuestion].answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.onclick = () => selectAnswer(index);
    answersEl.appendChild(button);
  });
}

function selectAnswer(index) {
  if (index === quizData[currentQuestion].correct) {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  document.getElementById("question").style.display = "none";
  document.getElementById("answers").style.display = "none";

  document.getElementById("quizResult").innerText =
    "Final Score: " + score + "/" + quizData.length;
}

window.addEventListener("DOMContentLoaded", loadQuiz);
