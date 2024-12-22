document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'nandu' && password === '1234') {
            alert('Login successful!');
            window.location.href = 'chatbot.html'; 
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});
