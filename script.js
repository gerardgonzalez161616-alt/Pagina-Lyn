
const screens = document.querySelectorAll(".screen");


// NAVIGATION

function showScreen(screenId) {
    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// WELCOME BUTTON

document.getElementById("startBtn").addEventListener("click", function () {
    showScreen("story");
});


// NEXT SECTION BUTTONS

document.querySelectorAll(".next-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        showScreen(button.dataset.next);
    });
});


// LOVE IN DIFFERENT LANGUAGES

const loveMessages = [
    { language: "English ", text: "I love you" },
    { language: "Spanish ", text: "Te amo" },
    { language: "Filipino ", text: "Mahal kita" },
    { language: "French ", text: "Je t’aime" },
    { language: "Italian ", text: "Ti amo" },
    { language: "Portuguese ", text: "Eu te amo" },
    { language: "German ", text: "Ich liebe dich" },
    { language: "Japanese ", text: "愛してる" },
    { language: "Korean ", text: "사랑해" },
    { language: "Chinese ", text: "我爱你" },
    { language: "Tagalog ", text: "Mahal na mahal kita" },
    { language: "Indonesian ", text: "Aku cinta kamu" },
    { language: "Turkish ", text: "Seni seviyorum" },
    { language: "Arabic ", text: "أحبك" },
    { language: "Russian ", text: "Я тебя люблю" },
    { language: "Hindi ", text: "मैं तुमसे प्यार करता हूँ" },
    { language: "Greek ", text: "Σ' αγαπώ" },
    { language: "Dutch ", text: "Ik hou van jou" },
    { language: "Swahili ", text: "Nakupenda" },
    { language: "Cebuano ", text: "Gihigugma tika" }
];

let loveIndex = 0;

const loveHeartBtn = document.getElementById("loveHeartBtn");
const loveLanguage = document.getElementById("loveLanguage");
const loveLanguageName = document.getElementById("loveLanguageName");
const loveCounter = document.getElementById("loveCounter");

loveHeartBtn.addEventListener("click", function () {
    loveIndex = (loveIndex + 1) % loveMessages.length;

    const message = loveMessages[loveIndex];

    loveLanguage.textContent = message.text;
    loveLanguageName.textContent = message.language;

    loveCounter.textContent =
        `${loveIndex + 1} / ${loveMessages.length} languages`;

    // Restart the text animation
    loveLanguage.style.animation = "none";
    void loveLanguage.offsetWidth;
    loveLanguage.style.animation = "appear 0.4s ease";

    // Brief heart effect
    loveHeartBtn.textContent = "💗";

    setTimeout(function () {
        loveHeartBtn.textContent = "❤️";
    }, 250);
});


// REASONS WHY YOU ARE SPECIAL

const reasons = [
    "Your smile can make an ordinary day feel special.",
    "I appreciate the way you make me smile.",
    "You have a place in my heart that is uniquely yours.",
    "I love the little moments we share.",
    "You make the distance feel a little less difficult.",
    "I admire the person you are and the person you're becoming.",
    "Talking to you can be the best part of my day.",
    "I love discovering new things about you.",
    "You remind me that meaningful connections are worth caring for.",
    "Because being you is already something special."
];

let currentReason = 0;

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");

reasonBtn.addEventListener("click", function () {
    currentReason = (currentReason + 1) % reasons.length;

    reasonText.textContent = reasons[currentReason];

    reasonNumber.textContent =
        String(currentReason + 1).padStart(2, "0");
});


// FINAL MESSAGE

const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

finalBtn.addEventListener("click", function () {
    finalMessage.classList.remove("hidden");

    finalBtn.textContent = "Message opened ♡";
    finalBtn.disabled = true;
});


// RESTART THE EXPERIENCE

document.getElementById("restartBtn").addEventListener("click", function () {
    // Hide the final message
    finalMessage.classList.add("hidden");

    finalBtn.disabled = false;
    finalBtn.textContent = "One last message 💗";

    // Reset the reasons
    currentReason = 0;

    reasonNumber.textContent = "01";
    reasonText.textContent = reasons[0];

    // Reset the language heart
    loveIndex = 0;

    loveLanguage.textContent = loveMessages[0].text;
    loveLanguageName.textContent = loveMessages[0].language;
    loveCounter.textContent =
        `1 / ${loveMessages.length} languages`;

    loveHeartBtn.textContent = "❤️";

    // Return to the beginning
    showScreen("welcome");
});
