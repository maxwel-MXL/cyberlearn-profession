console.log("JS is working");

console.log("Script Loaded");

window.addEventListener("DOMContentLoaded", function () {
    loadUser();
    loadQuiz();
});
function loadQuiz() 

    if (!document.getElementById("question")) return;
    showQuestion();
}

