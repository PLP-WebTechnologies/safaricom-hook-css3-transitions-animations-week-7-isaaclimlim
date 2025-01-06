// Part 2: Javascript Functions

// Functions with parameters and return values

function calculateRectangleArea(width, height) {
    return width * height;
}

const rect = calculateRectangleArea(5,10);

console.log('Rectangle area:', rect);

// Function demonstarting variable scope

let globalVar = 'I am a global variable';

function displayGlobalVar() {
    let localVar = 'I am a local variable';
    console.log('Global variable:', globalVar);
}

displayGlobalVar();
//console.log('Display global variable:', localVar);

// Function to toggle
function animateBox() {
    const box = document.querySelector(".animated-box");
    if (box.classList.contains("show")) {
        box.classList.remove("show");
    } else {
        box.classList.add("show");
    }
}

const moveBox = document.querySelector("#animate-box-button");

moveBox.addEventListener("click", animateBox);

