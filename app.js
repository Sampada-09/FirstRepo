
const button = document.getElementById('changeTextBtn');
const message = document.getElementById('message');

// Step 2: Add an event listener to the button
button.addEventListener('click', function() {
    message.textContent = 'Hello, DOM!';
});
