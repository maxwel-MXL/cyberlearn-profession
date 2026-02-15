const user = localStorage.getItem("loggedInUser");


    window.location.href = "index.html";
}

function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

function completeModule(moduleNumber){
    localStorage.setItem("module" + moduleNumber, "completed");
    updateProgress();
}

function updateProgress(){
    let completed = 0;

    for(let i=1; i<=4; i++){
        if(localStorage.getItem("module"+i) === "completed"){
            completed++;
        }
    }

    let percent = (completed/4)*100;

    const bar = document.getElementById("progressFill");
    if(bar){
        bar.style.width = percent + "%";
    }

    if(percent === 100){
        localStorage.setItem("certificate","unlocked");
    }
}
