console.log("JS is working");

console.log("Script Loaded");

function login() {
    let username = document.getElementById("username").value;

    if (username.trim() === "") {
        alert("Enter username");
        return;
    }

    localStorage.setItem("user", username);
    window.location.href = "dashboard.html";
}
window.addEventListener("DOMContentLoaded", function () {
    loadUser();
    loadQuiz();
});
function loadQuiz() {
    if (!document.getElementById("question")) return;
    showQuestion();
}
<script>
function submitQuiz() {
  let score = 0;

  let answers = {
    q1: "a",
    q2: "b",
    q3: "b",
    q4: "c"
  };

  for (let question in answers) {
    let selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === answers[question]) {
      score++;
    }
  }

  let result = document.getElementById("result");

  if (score === 4) {
    result.innerHTML = "🔥 Excellent! You scored 4/4";
  } else {
    result.innerHTML = "You scored " + score + "/4. Keep practicing!";
  }
}
</script>
    </body>
