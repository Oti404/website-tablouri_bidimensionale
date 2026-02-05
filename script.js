function scrollToTarget(targetId) {
    // Get the target element by ID
    var targetElement = document.getElementById(targetId);

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('keydown', function(event) {
    // Check if the pressed key is the "Arrow Up" key (key code 38)
    if (event.code === 'ArrowUp') {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }
});
var fixedBox = document.getElementById('menu');
var boxOffset = fixedBox.offsetTop; // Initial position of the box

window.addEventListener('scroll', function() {
    var currentScrollPosition = window.scrollY;

    // Check if the scroll position is greater than or equal to the box's offset
    if (currentScrollPosition >= boxOffset) {
        fixedBox.style.top = '0';
    } else {
        fixedBox.style.top = boxOffset - currentScrollPosition + 'px';
    }
});

const scrollDiv = document.getElementById("target");

scrollDiv.addEventListener("mouseenter", () => {
  // Scroll the div into view when hovering
  scrollDiv.scrollIntoView({ behavior: "smooth" });
});

$("/photos/profile.jpg").mousedown(function(){
    return false;
});