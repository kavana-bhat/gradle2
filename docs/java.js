// Store completed sections
let completed = new Set();

// Store counter clicks
let clicks = 0;


// Get HTML elements
const htmlButton = document.getElementById("htmlButton");
const cssButton = document.getElementById("cssButton");
const jsButton = document.getElementById("jsButton");

const htmlAnswer = document.getElementById("htmlAnswer");
const cssAnswer = document.getElementById("cssAnswer");
const jsAnswer = document.getElementById("jsAnswer");

const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");

const counterButton = document.getElementById("counterButton");
const resetButton = document.getElementById("resetButton");

const done = document.getElementById("done");


// HTML button
htmlButton.addEventListener("click", function () {

    htmlAnswer.classList.add("show");

    completed.add("html");

    updateProgress();

});


// CSS button
cssButton.addEventListener("click", function () {

    cssAnswer.classList.add("show");

    completed.add("css");

    updateProgress();

});


// JavaScript button
jsButton.addEventListener("click", function () {

    jsAnswer.classList.add("show");

    completed.add("javascript");

    updateProgress();

});


// Counter button
counterButton.addEventListener("click", function () {

    clicks++;

    counterButton.textContent =
        "Clicked " + clicks + " times";

});


// Update progress
function updateProgress() {

    const count = completed.size;

    const percentage = (count / 3) * 100;

    progress.style.width = percentage + "%";

    progressText.textContent =
        count + " of 3 completed";


    // Check if everything is completed
    if (count === 3) {

        done.textContent =
            "🎉 Lesson complete! You learned HTML, CSS and JavaScript.";

    } else {

        done.textContent = "";

    }

}


// Reset everything
resetButton.addEventListener("click", function () {

    // Clear completed sections
    completed.clear();

    // Reset counter
    clicks = 0;

    counterButton.textContent =
        "Clicked 0 times";


    // Hide answers
    htmlAnswer.classList.remove("show");
    cssAnswer.classList.remove("show");
    jsAnswer.classList.remove("show");


    // Reset progress
    updateProgress();

});