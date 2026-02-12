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
}

// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
