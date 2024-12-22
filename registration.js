document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.trim() !== '' && password.trim() !== '') {
            alert('Registration successful! You can now login.');
            window.location.href = 'login.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});
