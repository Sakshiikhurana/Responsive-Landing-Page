document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.getElementById('signupForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (name === '' || email === '') {
            alert('Please fill in all fields');
        } else {
            alert('Form submitted successfully!');
            form.reset();
            $('#signupModal').modal('hide'); // Hide modal on successful submission
        }
    });
});
