/* =========================
   OPEN ENVELOPE
========================= */

const envelope = document.getElementById("openInvitation");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.add("open");

        setTimeout(() => {

            window.location.href = "birthday.html";

        }, 1000);

    });

}


/* =========================
   MOVING NO BUTTON
========================= */

const noButton = document.getElementById("noButton");

if (noButton) {

    noButton.addEventListener("mouseenter", moveButton);

    noButton.addEventListener("touchstart", (event) => {

        event.preventDefault();

        moveButton();

    });

}


function moveButton() {

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* =========================
   YES BUTTON
========================= */

const yesButton = document.getElementById("yesButton");

if (yesButton) {

    yesButton.addEventListener("click", () => {

        document
            .getElementById("acceptanceContent")
            .classList.add("hidden");

        document
            .getElementById("successMessage")
            .classList.remove("hidden");

        createConfetti();

    });

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confettiContainer");

    if (!container) return;


    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.innerHTML =
            Math.random() > 0.5 ? "🎉" : "❤️";

        container.appendChild(confetti);

    }

}