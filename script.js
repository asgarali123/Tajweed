// JavaScript to Control Button Visibility and Smooth Scrolling
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

//Cards for rules
document.querySelectorAll('.myCard').forEach(card => {
    card.addEventListener('click', function (event) {
        // Prevents any event bubbling issues
        event.stopPropagation();
        this.querySelector('.innerCard').classList.toggle('flipped');
    });
});

// Dynamically Load Bootstrap JS (Not Recommended for Standard Use)
const bootstrapScript = document.createElement('script');
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
bootstrapScript.type = "text/javascript";
bootstrapScript.async = true;
document.head.appendChild(bootstrapScript);

//test for audio
// Function to play the sound when a letter is clicked
function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}

// JavaScript to control the overlay behavior

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('messageOverlay');
    const closeButton = document.getElementById('overlayButton');

    // Show the overlay when the page loads
    overlay.style.display = 'flex';

    // Show the close button after a short delay for better UX
    setTimeout(() => {
        closeButton.classList.remove('hidden');
    }, 2000); // 2-second delay

    // Close the overlay when the close button is clicked
    closeButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    // Close the overlay if the user clicks outside the content area
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});
