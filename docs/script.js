// ===============================
// CYBERLEARN MAIN SCRIPT
// ===============================

// Run after page loads
document.addEventListener("DOMContentLoaded", function () {

    protectPage();
    updateProgressBar();
    displayUsername();

});


// ===============================
// LOGIN PROTECTION
// ===============================

function protectPage() {
    const currentPage = window.location.pathname.split("/").pop();

    // Allow access to login page
    if (currentPage === "index.html" || currentPage === "") {
        return;
    }

    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "index.html";
    }
}


// ===============================
// LOGIN FUNCTION
// ===============================

function login() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Please enter your ID");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
}


// ===============================
// LOGOUT
// ===============================

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}


// ===============================
// MODULE NAVIGATION
// ===============================

function openModule(number) {
    window.location.href = "module" + number + ".html";
}


// ===============================
// MARK MODULE COMPLETE
// ===============================

function completeModule(number) {
    localStorage.setItem("module" + number, "completed");
    updateProgressBar();
    alert("Module " + number + " marked as completed!");
}


// ===============================
// PROGRESS SYSTEM
// ===============================

function updateProgressBar() {

    const progressBar = document.getElementById("progressFill");

    if (!progressBar) return;

    let completed = 0;
    const totalModules = 4;

    for (let i = 1; i <= totalModules; i++) {
        if (localStorage.getItem("module" + i) === "completed") {
            completed++;
        }
    }

    const percentage = (completed / totalModules) * 100;
    progressBar.style.width = percentage + "%";

    if (percentage === 100) {
        localStorage.setItem("certificateUnlocked", "yes");
    }
}


// ===============================
// DISPLAY USERNAME
// ===============================

function displayUsername() {
    const userElement = document.getElementById("userDisplay");

    if (!userElement) return;

    const username = localStorage.getItem("loggedInUser");
    userElement.textContent = username ? username : "";
}
