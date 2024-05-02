// Example: Add a click event to the navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        // Add your code here to handle navigation (e.g., show/hide content)
    });
});