// validation.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form fields here
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            alert('Please fill in all fields.'); 
        } else {
            // Form submission logic goes here
            alert('Form submitted!');
            form.reset(); 
        }
    });
});
