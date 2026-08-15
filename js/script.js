const startButton = document.getElementById("startButton");
const celebrateButton = document.getElementById("celebrateButton");
const resetButton = document.getElementById("resetButton");

const flag = document.querySelector(".flag");
const messageSection = document.querySelector(".message-section");
const message = document.querySelector(".message");


// Start Flag Animation

startButton.addEventListener("click", function () {

    flag.classList.add("flag-animation");

    message.textContent =
        "The Indian National Flag represents our freedom, unity and pride.";

});


// Celebrate Independence Day

celebrateButton.addEventListener("click", function () {

    flag.classList.add("flag-animation");

    message.textContent =
        "Happy 80th Independence Day! Freedom, Unity and Pride — Jai Hind!";

    messageSection.style.borderTop =
        "6px solid #FF9933";

    messageSection.style.borderBottom =
        "6px solid #138808";

});


// Reset Page

resetButton.addEventListener("click", function () {

    flag.classList.remove("flag-animation");

    message.textContent =
        "Freedom is not only a gift of the past, it is a responsibility of the present and a promise for the future.";

    messageSection.style.borderTop = "none";

    messageSection.style.borderBottom = "none";

});
