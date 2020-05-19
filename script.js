const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randBtn = document.getElementById("random");

setGradient();

function setGradient() {
    body.style.background =
    "linear-gradient(to right, " 
    + color1.value  
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function setRandomGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
console.log(randomColor());

color1.addEventListener("input", setGradient); 
    
color2.addEventListener("input", setGradient);

randBtn.addEventListener("click", setRandomGradient);