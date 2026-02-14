console.log("JS Connected");

function login() {
    let username = document.getElementById("username").value;

    if (username.trim() === "") {
        alert("Enter username");
        return;
    }

    localStorage.setItem("user", username);
    window.location.href = "dashboard.html";
}
let currentQuestion = 0;
let score = 0;

const quizData = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
    correct: 0
  },
  {
    question: "Which tag creates a paragraph?",
    answers: ["<h1>", "<p>", "<div>"],
    correct: 1
  },
  {
    question: "Which CSS property changes text color?",
    answers: ["font-style", "color", "background"],
    correct: 1
  },
  {
    question: "JavaScript is used for?",
    answers: ["Styling", "Structuring", "Interactivity"],
    correct: 2
  },
  {
    question: "Which tag links JavaScript file?",
    answers: ["<style>", "<script>", "<link>"],
    correct: 1
  },
  {
    question: "Which symbol is used for ID in CSS?",
    answers: [".", "#", "*"],
    correct: 1
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
      "Quiz Completed! Your Score: " + score + "/" + quizData.length;

    document.getElementById("question").style.display = "none";
    document.getElementById("answers").style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", loadQuiz);
