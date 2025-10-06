// Dark Mode Toggle
let btn = document.getElementById('modeBtn');
btn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    btn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Simple Alert
function showProfile(name) {
    alert("You clicked on " + name + "'s profile!");
}