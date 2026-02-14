console.log("Script is connected");
console.log("Login clicked");

// ===== LOGIN =====
function login() {
  let username = document.getElementById("username");
  if (!username) return;

  let value = username.value.trim();
  if (value === "") {
    alert("Enter username");
    return;
  }

  localStorage.setItem("user", value);
  window.location.href = "dashboard.html";
}

// ===== MODULE 3 QUIZ =====

let currentQuestion = 0;
let score = 0;

const quizData = [
  {
    question: "What is the main goal of cybersecurity?",
    answers: ["Entertainment", "Protect systems and data", "Speed up internet"],
    correct: 1
  },
  {
    question: "Phishing attacks target?",
    answers: ["Hardware", "Human users", "Cables"],
    correct: 1
  },
  {
    question: "Ransomware does what?",
    answers: ["Encrypts data", "Boosts speed", "Deletes browser"],
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
    document.getElementById("quizResult").innerText =
      "Final Score: " + score + "/" + quizData.length;
  }
}

window.addEventListener("DOMContentLoaded", loadQuiz);
<script>
  <button onclick="openModule4()">


const module4Passed = localStorage.getItem("module4Passed");

const module5Btn = document.getElementById("module5Btn");

if(!module4Passed){
module5Btn.disabled = true;
module5Btn.innerText = "Module 5 Locked";
}

document.getElementById("module4Btn").onclick = function(){
window.location.href="module4.html";
};
window.location.href="certificate.html";

</script>


