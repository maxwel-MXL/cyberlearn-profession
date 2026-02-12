// LOGIN SYSTEM
function login() {
    let username = document.getElementById("username").value;

    if (username.trim() === "") {
        alert("Enter username");
        return;
    }

    localStorage.setItem("user", username);
    localStorage.setItem("module2Progress", 0);
    localStorage.setItem("totalScore", 0);

    window.location.href = "dashboard.html";
}

// LOAD USER
function loadUser() {
    let user = localStorage.getItem("user");

    if (!user) {
        window.location.href = "index.html";
    }

    let welcome = document.getElementById("welcomeUser");
    if (welcome) {
        welcome.innerText = "Welcome, " + user;
    }
    function loadCertificate() {
    let user = localStorage.getItem("user");
    let score = localStorage.getItem("totalScore");

    if (score >= 20) {
        document.getElementById("certUser").innerText = user;
    } else {
        window.location.href = "dashboard.html";
    }
}

    
}

// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
let questions = [
    {
        question: "What protocol loads websites?",
        answers: ["HTTP", "FTP", "SSH"],
        correct: 0
    },
    {
        question: "What device connects networks?",
        answers: ["Switch", "Router", "Monitor"],
        correct: 1
    },
    {
        question: "Port 443 is used for?",
        answers: ["HTTP", "HTTPS", "FTP"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    if (!document.getElementById("question")) return;

    showQuestion();
}

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(index);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score += 10;
        document.getElementById("quizResult").innerText = "✅ Correct!";
    } else {
        document.getElementById("quizResult").innerText = "❌ Wrong!";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        finishQuiz();
        return;
    }

    showQuestion();
}

function finishQuiz() {
    document.getElementById("quizResult").innerText = "Final Score: " + score;

    localStorage.setItem("totalScore", score);

    if (score >= 20) {
        localStorage.setItem("module2Progress", 100);
    }
}

window.onload = function() {
    loadUser();
    loadQuiz();
};
