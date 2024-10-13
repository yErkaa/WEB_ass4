document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Flag to track if the form is valid
    let isValid = true;

    // Validate Name
    if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validate Password
    if (password.value.length < 6) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Validate Confirm Password
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // If the form is valid, redirect to index.html
    if (isValid) {
        alert("Sign up successful! Redirecting to the main page...");
        window.location.href = "ass_3.html";  // Redirect to index.html
    }
});
