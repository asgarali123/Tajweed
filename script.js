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
