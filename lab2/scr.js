window.addEventListener('scroll', function() {
    var scrollButtonContainer = document.getElementById('scroll-buttons');
    if (window.scrollY > 100) { // Adjust as needed
        scrollButtonContainer.style.top = '0';
    } else {
        scrollButtonContainer.style.top = '-50px';
    }
});

document.getElementById('scroll-up').addEventListener('click', function() {
    window.scrollBy(0, -100); // Adjust scrolling amount
});

document.getElementById('scroll-down').addEventListener('click', function() {
    window.scrollBy(0, 100); // Adjust scrolling amount
});