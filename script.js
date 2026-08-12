/* =========================
   MOOD DATA
========================= */

const moods = {

    happy: {
        emoji: "😊",
        name: "Happy",
        message: "Enjoy this moment. You deserve it! ✨",
        percent: 90,

        thoughts: [
            "Today is a good day to smile. 😊",
            "Keep that positive energy going! ✨",
            "Small moments can create big happiness.",
            "Share your happiness with someone today."
        ]
    },


    sad: {
        emoji: "😢",
        name: "Sad",
        message: "It's okay to feel this way. Take your time. 💙",
        percent: 35,

        thoughts: [
            "You don't have to be okay all the time.",
            "Take a deep breath and give yourself some time.",
            "Tomorrow can be a different day. 🌤️",
            "Be kind to yourself today."
        ]
    },


    angry: {
        emoji: "😡",
        name: "Angry",
        message: "Pause. Breathe. Give yourself a moment. ❤️",
        percent: 45,

        thoughts: [
            "Take a deep breath before you react.",
            "A short pause can change everything.",
            "Let the moment pass before making a decision.",
            "You are in control of your next move."
        ]
    },


    tired: {
        emoji: "😴",
        name: "Tired",
        message: "Maybe your mind needs a little rest. 🌙",
        percent: 25,

        thoughts: [
            "Rest is not wasting time.",
            "Your body deserves a break.",
            "Slow down. You don't have to rush everything.",
            "Maybe tonight is a good night to recharge. 🌙"
        ]
    }

};


/* =========================
   CHANGE MOOD
========================= */

function changeMood(mood) {

    const data = moods[mood];

    /* Change body mood */

    document.body.className = mood;


    /* Emoji */

    document.getElementById("selectedEmoji").textContent =
        data.emoji;


    /* Mood name */

    document.getElementById("moodName").textContent =
        data.name;


    /* Main message */

    document.getElementById("moodMessage").textContent =
        data.message;


    /* Mood percentage */

    document.getElementById("moodPercent").textContent =
        data.percent + "%";


    /* Meter */

    setTimeout(function() {

        document.getElementById("meterFill").style.width =
            data.percent + "%";

    }, 100);


    /* Random thought */

    const randomIndex =
        Math.floor(Math.random() * data.thoughts.length);

    document.getElementById("thoughtText").textContent =
        data.thoughts[randomIndex];


    /* Show result */

    document.getElementById("result")
        .classList.remove("hidden");


    /* Change title message */

    document.querySelector(".subtitle").textContent =
        "This is how you're feeling right now.";


    /* Scroll to result on mobile */

    document.getElementById("result")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* =========================
   RESET MOOD
========================= */

function resetMood() {

    document.body.className = "";

    document.getElementById("result")
        .classList.add("hidden");

    document.getElementById("message").textContent =
        "Choose your mood";

    document.getElementById("meterFill").style.width =
        "0%";

}


/* =========================
   LIVE TIME
========================= */

function updateTime() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");


    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds}`;

}


updateTime();

setInterval(updateTime, 1000);


/* =========================
   DARK / LIGHT MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("light");


    const button =
        document.getElementById("themeBtn");


    if (document.body.classList.contains("light")) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }

}


/* =========================
   SHARE MOOD
========================= */

async function shareMood() {

    const mood =
        document.getElementById("moodName").textContent;

    const emoji =
        document.getElementById("selectedEmoji").textContent;


    const text =
        `I'm feeling ${emoji} ${mood} right now!`;


    if (navigator.share) {

        try {

            await navigator.share({
                title: "My Mood Right Now",
                text: text,
                url: window.location.href
            });

        } catch (error) {

            console.log("Share cancelled.");

        }

    } else {

        try {

            await navigator.clipboard.writeText(text);

            alert("Mood copied! 📋");

        } catch (error) {

            alert(text);

        }

    }

}
