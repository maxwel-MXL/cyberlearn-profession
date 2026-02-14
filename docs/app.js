const user = localStorage.getItem("loggedInUser");

if(!user){
    window.location.href = "index.html";
}

function openModule4(){
    window.location.href = "module4.html";
}
