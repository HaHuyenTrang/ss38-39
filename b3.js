window.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var image = overlay.querySelector('img');
    var percentage = 0;
    var fadeInterval = setInterval(function() {
        if (percentage >= 100) {
            clearInterval(fadeInterval);
            overlay.style.display = 'none';
        } else {
            percentage++;
            image.style.opacity = percentage / 100;
        }
    }, 110);
});