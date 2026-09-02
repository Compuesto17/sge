const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionCard = document.getElementById("questionCard");
const appointmentCard = document.getElementById("appointmentCard");
const confirmationCard = document.getElementById("confirmationCard");

const dateForm = document.getElementById("dateForm");
const confirmationText = document.getElementById("confirmationText");


// YES BUTTON
yesBtn.addEventListener("click", function () {

    questionCard.style.display = "none";

    appointmentCard.style.display = "block";

});


// NO BUTTON MOVES
function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


// Desktop
noBtn.addEventListener("mouseover", moveNoButton);


// Mobile
noBtn.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();

});


// CONFIRM DATE
dateForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const selectedDate =
        document.getElementById("date").value;

    const selectedTime =
        document.getElementById("time").value;

    const selectedPlace =
        document.getElementById("place").value;

    const selectedType =
        document.getElementById("dateType").value;

    const message =
        document.getElementById("message").value;


    // Convert date into a nicer format
    const dateObject = new Date(selectedDate + "T00:00:00");

    const formattedDate = dateObject.toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );


    // Show confirmation
    confirmationText.innerHTML = `
        <strong>Our Date Details 💕</strong>
        <br><br>

        📅 <b>${formattedDate}</b>
        <br>

        🕐 <b>${selectedTime}</b>
        <br>

        📍 <b>${selectedPlace}</b>
        <br>

        💕 <b>${selectedType}</b>

        ${
            message
            ? `<br><br>💌 "${message}"`
            : ""
        }
    `;


    appointmentCard.style.display = "none";

    confirmationCard.style.display = "block";

});