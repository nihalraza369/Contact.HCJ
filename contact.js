document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('form-response').innerHTML = `<p>Thank you, ${name}! We have received your message.</p>`;
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').innerHTML = `<p style="color: red;">Please fill in all the fields.</p>`;
    }
});
