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

// Function to show the overlay and button with delays
window.onload = function() {
  const overlay = document.getElementById('messageOverlay');
  const button = document.getElementById('overlayButton');

  // Show overlay immediately
  overlay.style.display = 'flex';

  // Show button after 3 seconds
  setTimeout(() => {
    button.classList.remove('hidden');
  }, 3000);

  // Optional: Hide overlay when button is clicked
  button.onclick = function() {
    overlay.style.display = 'none';
  };
};
