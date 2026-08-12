function changeMood(mood) {

    document.body.className = mood;

    const message = document.getElementById("message");

    if (mood === "happy") {
        message.textContent = "✨ You're feeling happy right now!";
    }

    else if (mood === "sad") {
        message.textContent = "💙 It's okay to feel this way.";
    }

    else if (mood === "angry") {
        message.textContent = "❤️ Take a deep breath and relax.";
    }

    else if (mood === "tired") {
        message.textContent = "🌙 Maybe it's time to take some rest.";
    }
}
