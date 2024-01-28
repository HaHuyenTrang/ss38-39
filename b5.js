function animateNumber(elementId, targetNumber, duration) {
    var element = document.getElementById(elementId);
    var currentNumber = 0;
    var increment = Math.ceil(targetNumber / (duration / 1000));
    var interval = setInterval(function() {
        if (currentNumber >= targetNumber) {
            clearInterval(interval);
        } else {
            currentNumber += increment;
            if (currentNumber > targetNumber) {
                currentNumber = targetNumber;
            }
            element.textContent = currentNumber;
        }
    }, 1000);
}

window.addEventListener('DOMContentLoaded', function() {
    animateNumber('followers', 12000, 2000);
    animateNumber('subscribers', 5000, 2000);
    animateNumber('fans', 7500, 2000);
});