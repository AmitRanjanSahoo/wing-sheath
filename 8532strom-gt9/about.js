window.onload = function () {
    document.querySelector("#content").classList.toggle("show");
    document.getElementById("load").style.display = "none";
}

function changeMode() {
    document.body.classList.toggle("dark");
    for(var i = 0; i < document.querySelectorAll("div").length; i++) {
        document.querySelectorAll("div")[i].classList.toggle("dark");
    }
}
