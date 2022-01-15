function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('.clock').textContent = time;
}

displayTime();    
const createClock = setInterval(displayTime, 1000);

const startButton = document.querySelector(".start")
const lapButton = document.querySelector(".lap")
const endButton = document.querySelector(".end")
const resetButton = document.querySelector(".reset")
const timer = document.querySelector(".timer")
const record = document.querySelector(".record")
let startTime = 0
let runClock
let isRun = false
let time = 0

startButton.addEventListener("click", startTimer) 
lapButton.addEventListener("click", lapTimer)
endButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetTimer)

function startTimer(){
    if (isRun == true) {
        return
    }   
    console.log("click start")
    isRun = true
    startButton.disabled = true
    lapButton.disabled = false
    endButton.disabled = false
    resetButton.disabled = false
    runClock = setInterval(runTimer, 10); 
}

function runTimer(){
    time ++
    let ms = time
    let hour = parseInt(ms/360000)
    ms = ms % 360000
    let min = parseInt(ms/6000)
    ms = ms % 6000
    let sec = parseInt(ms/100)
    ms = ms % 100
    timer.textContent = displayTimer([hour, min, sec, ms])
}

function stopTimer(){
    if (isRun == false) {
        return
    }
    console.log("click end")
    clearInterval(runClock)
    isRun = false  
    startButton.disabled = false
    endButton.disabled = true
}

function resetTimer(){
    clearInterval(runClock)
    isRun = false
    time = 0
    startButton.disabled = false
    endButton.disabled = true
    resetButton.disabled = true
    lapButton.disabled = true
    while (record.hasChildNodes()){
        const child = record.firstChild
        record.removeChild(child)
    }
    timer.textContent = "00:00:00:00"
}

function displayTimer(time){
    const timeInfo = []
    time.forEach(ele => {
        let timeString = ""
        if (ele < 10){
            timeString += "0"
        }
        timeString += ele
        timeInfo.push(timeString)
    });

    return timeInfo.join(":")
}

function lapTimer(){
    const li = document.createElement("li")
    li.textContent = timer.textContent
    record.appendChild(li)
}