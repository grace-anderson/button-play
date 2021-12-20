
const box = document.querySelector("#box");

//grow button
const btnGrow = document.querySelector("#button1")

btnGrow.addEventListener("click", function() {
    box.style.width = "300px";
    box.style.height = "300px";
    box.innerText = "";
    box.style.transition = "2s";
});

//blue button
const btnBlue = document.querySelector("#button2")

btnBlue.addEventListener("click", function() {
    box.style.background = "blue";
    box.style.transition = "2s";
    box.innerText = "";
});

//fade button
const btnFade = document.querySelector("#button3")

btnFade.addEventListener("click", function() {
    box.style.opacity = 0;
    box.style.transition = "opacity 2s";
    box.innerText = "";
});

//reset button
const btnReset = document.querySelector("#button4")

btnReset.addEventListener("click", function() {
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.background = "orange";
    box.style.margin = "25px";
    box.style.opacity = 1;
    box.style.transition = "opacity 2s";
    box.innerText = "I'M BACK!";
    box.style.fontSize = "2.1em";
    box.style.color = "white";
    box.style.textAlign = "center";
    box.style.lineHeight = "2.2em";
    box.style.fontFamily = "Arial";
});

