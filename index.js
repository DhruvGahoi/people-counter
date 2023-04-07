
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearEl = document.getElementById("clr-btn")
let count = 0

clearEl.addEventListener("click" ,clear)
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clear() {

    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
    count = 0
}