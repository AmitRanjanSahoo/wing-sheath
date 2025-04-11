window.onload = function () {
    document.querySelector("#content").classList.toggle("show");
    document.getElementById("load").style.display = "none";
}
// To prevent default button action.
var bu = document.querySelector("#button-one");
bu.addEventListener("click", function(event){
    event.preventDefault();
});
var bu2 = document.querySelector("#button-two");
bu2.addEventListener("click", function(event){
    event.preventDefault();
});
// To prevent default enter action.
const form = document.querySelector("#form-one");
form.addEventListener("keydown", function(event) {
    if(event.key==="Enter"){
        event.preventDefault();
    }
});

function saveInfo() {
    var ele = document.querySelector("#text-box");
    var newContent = document.querySelector("#new-content");

    // Append the new paragraph to #new-content
    if(ele.value.trim() != "") { 
        // Create a new <p> element
        var newParagraph = document.createElement("p");
        newParagraph.textContent = ele.value; // Set the content safely
        newContent.appendChild(newParagraph);
        // Clear the text box
        ele.value = "";
    }
    // Create and append the <br> after the paragraph
    //var lineBreak = document.createElement("br");
    //newContent.appendChild(lineBreak);
    var horizline = document.createElement("hr");
    horizline.style.width = "70%";
    newContent.appendChild(horizline);

}

function deletInfo() {
    var containing = document.querySelector("#new-content");
    containing.innerHTML = "";
}

function changeMode() {
    document.body.classList.toggle("dark");
}
