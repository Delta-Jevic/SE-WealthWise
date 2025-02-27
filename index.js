const container = document.querySelector('.container');
const LoginLinK = document.querySelector('.SignInLink');
const RegisterLinK = document.querySelector('.SignUpLink');

// Toggle between login and register forms
RegisterLinK.addEventListener('click', () => {
    container.classList.add('active');
});
LoginLinK.addEventListener('click', () => {
    container.classList.remove('active');
});

// Function to show the success modal
function showSuccessModal(message, redirectUrl) {
    const modal = document.getElementById('successModal');
    const messageElement = document.getElementById('successMessage');
    
    messageElement.textContent = message; // Set custom message
    modal.style.display = 'flex'; // Show modal
    
    // Auto-hide modal after 3 seconds, then redirect
    setTimeout(() => {
        modal.style.display = 'none';
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    }, 3000);
}

// Register functionality
const registerForm = document.querySelector('.form-box.Register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[email]) {
        alert('User already exists! Please log in.');
    } else {
        users[email] = password;
        localStorage.setItem('users', JSON.stringify(users));
        showSuccessModal('Registration successful!', './signup.html'); // Redirect to Product.html
    }
});

// Login functionality
const loginForm = document.querySelector('.form-box.Login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[email] && users[email] === password) {
        showSuccessModal('Login successful!', './Dashboard.html'); // Redirect to Dashboard.html
    } else {
        alert('Invalid email or password!');
    }
});
