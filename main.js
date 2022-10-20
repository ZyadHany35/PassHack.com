let pass = document.getElementById("pass");
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"; /* 61 charcter */
let charCount = 8;
let timer = document.getElementById("timer");
let timerTime = 0;
let wait = 5;
let restartBtn = document.getElementById("btnR")
let searching = window.prompt("Write 8 Charcters!");

let i = 0;
let j = 0;
restartBtn.onclick = function () {
    location.reload()
}
if (searching.length > 2) {
    location.reload()
}
setInterval(() => {
    i++
}, characters.length * wait);

setInterval(() => {
    timerTime += wait / 1000;
    timer.innerHTML = `${timerTime.toFixed(2)}s`;
    if (j < characters.length - 1) { 
        j++
    } else {
        j = 0;
    }
        pass.innerHTML = `${characters[i]}${characters[j]}`
        if (pass.innerHTML == searching || pass.innerHTML == "Zero If You Want" ) {
            document.write(`<div class="pass" id="fin">Finished => You Got "${characters[i]}${characters[j]}" In ${timerTime.toFixed(2)}s</div>`)
            let fin = document.getElementById("fin")
            fin.style.fontSize = "50px";
            fin.style.padding = "20px";
            fin.style.backgroundColor = "chartreuse";
            fin.style.borderRadius = "6px";
            fin.style.textAlign = "center";
        }

}, wait);
