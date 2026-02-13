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
