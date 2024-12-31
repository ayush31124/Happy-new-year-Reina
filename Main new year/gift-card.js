// Toggle Circle Menu
function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.toggle('active');
}

// Close Menu Function
function closeMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.classList.remove('active');
}

// Sequence Control
function playSequence() {
    const sound = new Audio('https://www.soundjay.com/human/sounds/happy-new-year.mp3');
    sound.play();
} 