// Show the Start menu when the "Start" button is clicked
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-menu').style.display = 'block';
});

// Close the Start menu
function closeStartMenu() {
    document.getElementById('start-menu').style.display = 'none';
}
