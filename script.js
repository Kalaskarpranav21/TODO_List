const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
if (typeof Storage !== "undefined") {
    // localStorage is supported
} else {
    // localStorage is not supported
    console.log("LocalStorage is not supported in this browser.");
}