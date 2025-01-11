// "Back to Top" Button Visibility and Smooth Scrolling
let mybutton = document.getElementById("myBtn");

// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Scroll smoothly to the top when the button is clicked
function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Card Flip Logic
document.querySelectorAll('.myCard').forEach(card => {
    card.addEventListener('click', function (event) {
        // Prevents event bubbling issues
        event.stopPropagation();
        // Toggle the "flipped" class on the inner card
        this.querySelector('.innerCard').classList.toggle('flipped');
    });
});

// Dynamically Load Bootstrap JS
const bootstrapScript = document.createElement('script');
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
bootstrapScript.type = "text/javascript";
bootstrapScript.async = true;
document.head.appendChild(bootstrapScript);

// Play Audio for Letters
function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

// Show Overlay and Button with Delays
window.onload = function () {
    const overlay = document.getElementById('messageOverlay');
    const button = document.getElementById('overlayButton');

    // Show the overlay immediately
    overlay.style.display = 'flex';

    // Show the button after 3 seconds
    setTimeout(() => {
        button.classList.remove('hidden'); // Reveal the button
    }, 10000);

    // Hide the overlay when the button is clicked
    button.onclick = function () {
        overlay.style.display = 'none';
    };
};

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            // Prevent the default anchor link behavior
            event.preventDefault();

            // Get the target element's ID and position
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Get the target's position relative to the document
                const targetRect = targetElement.getBoundingClientRect();
                const scrollY = window.scrollY;

                // Account for the navbar height and additional offset
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offset = 75; // Additional offset

                // Calculate the scroll position
                const targetScrollY = targetRect.top + scrollY - navbarHeight - offset;

                // Scroll smoothly to the calculated position
                window.scrollTo({
                    top: targetScrollY,
                    behavior: 'smooth',
                });
            }
        });
    });
});
