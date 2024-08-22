// JavaScript to handle form submission or any interactivity you wish to add

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    // Here you can add code to actually send the form data, e.g., using Fetch API
});
