const credentials = {
    "shanice": "realmz3006",
    "tester": "abc123",
    "adam": "adam3006"
};

document.getElementById("usernameInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("passwordInput").focus();
    }
});

document.getElementById("passwordInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkLogin();
    }
});

function checkLogin() {
    const username = document.getElementById("usernameInput").value.toLowerCase();
    const password = document.getElementById("passwordInput").value;
    const message = document.getElementById("message");
    const protectedContent = document.getElementById("protectedContent");
    const loginForm = document.getElementById("loginForm");

    if (credentials[username] && credentials[username] === password) {
        protectedContent.style.display = "block";
        loginForm.style.display = "none";
        message.textContent = "Access Granted!";
        message.style.color = "green";

        // Trigger loading of the functionality from script.js after login
        initializeApp();
    } else {
        message.textContent = "Incorrect Username or Password. Try Again.";
        message.style.color = "red";
    }
}

// Function to initialize the app functionality after successful login
function initializeApp() {
    const scriptTag = document.createElement("script");
    scriptTag.src = "script.js";
    scriptTag.type = "text/javascript";
    document.head.appendChild(scriptTag);
}
