/* =========================
   OPEN INVITATION
========================= */

const envelope = document.getElementById("openInvitation");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.add("open");

        setTimeout(() => {
            window.location.href = "birthday.html";
        }, 800);

    });

}


/* =========================
   ACCEPT PAGE
========================= */

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");


/* YES BUTTON */

if (yesButton) {

    yesButton.addEventListener("click", () => {

        const acceptanceContent =
            document.getElementById("acceptanceContent");

        const successMessage =
            document.getElementById("successMessage");

        if (acceptanceContent && successMessage) {

            acceptanceContent.classList.add("hidden");

            successMessage.classList.remove("hidden");

            createConfetti();
        }

    });

}


/* NO BUTTON */

/* Desktop: move when mouse approaches */

if (noButton) {

    noButton.addEventListener("mouseenter", () => {

        /* Only move on devices with a mouse */

        if (window.matchMedia("(hover: hover)").matches) {
            moveButton();
        }

    });


    /* Mobile: move when tapped */

    noButton.addEventListener("click", (event) => {

        event.preventDefault();

        moveButton();

    });

}


/* Move button safely */

function moveButton() {

    if (!noButton) return;

    /* Smaller movement so it stays on screen */

    const x = Math.random() * 100 - 50;
    const y = Math.random() * 60 - 30;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confettiContainer");

    if (!container) return;

    /* Remove old confetti first */

    container.innerHTML = "";

    for (let i = 0; i < 50; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.innerHTML =
            Math.random() > 0.5 ? "🎉" : "❤️";

        container.appendChild(confetti);

    }

}