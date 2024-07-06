// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission without redirect
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Form submission logic here
    alert('Form submitted successfully!');
});
