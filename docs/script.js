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
}let currentQuestion = 0;
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
  },
  {
    question: "Ransomware does what?",
    answers: ["Encrypts data for ransom", "Improves speed", "Deletes browser history"],
    correct: 0
  },
  {
    question: "MFA stands for:",
    answers: ["Multi-Factor Authentication", "Main File Access", "Maximum Firewall Action"],
    correct: 0
  },
  {
    question: "Firewalls are used to:",
    answers: ["Decorate networks", "Block unauthorized traffic", "Store passwords"],
    correct: 1
  },
  {
    question: "Social engineering attacks exploit:",
    answers: ["Hardware", "Human psychology", "Electricity"],
    correct: 1
  },
  {
    question: "Weak passwords increase risk of:",
    answers: ["Hacking", "Speed boost", "Better design"],
    correct: 0
  },
  {
    question: "HTTPS provides:",
    answers: ["Encryption", "Malware", "Spam"],
    correct: 0
  },
  {
    question: "Data breaches result in:",
    answers: ["Data exposure", "Data growth", "Data cleaning"],
    correct: 0
  },
  {
    question: "Antivirus software helps to:",
    answers: ["Remove malware", "Cook food", "Build websites"],
    correct: 0
  },
  {
    question: "Cybersecurity is important because:",
    answers: ["We live digitally", "We use paper", "We avoid internet"],
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

  localStorage.setItem("module3Score", score);

  if (score >= passMark) {
    unlockCertificate();
  } else {
    document.getElementById("quizResult").innerText +=
      " (Minimum pass mark is " + passMark + ")";
  }
}

function unlockCertificate() {
  let username = localStorage.getItem("user") || "Student";

  document.getElementById("certificate").style.display = "block";
  document.getElementById("certificateText").innerText =
    username + " has successfully completed Module 3 in Cybersecurity Fundamentals.";
}

window.addEventListener("DOMContentLoaded", loadQuiz);


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
