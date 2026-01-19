document.addEventListener('DOMContentLoaded', () => {

    /* --- Password Visibility Toggle --- */
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute('toggle-target');
            const passwordInput = document.querySelector(targetId);

            if (passwordInput) {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    passwordInput.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }
        });
    });

    /* --- Login Form Submission --- */
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                // Mock Authentication
                const btn = loginForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
                btn.disabled = true;

                setTimeout(() => {
                    alert(`Welcome back, ${email}! Redirecting to dashboard...`);
                    // In a real app, redirect here
                    window.location.href = 'index.html';
                }, 1500);
            }
        });
    }

    /* --- Register Form Submission --- */
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPass = document.getElementById('confirm-password').value;

            if (password !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            // Mock Registration
            const btn = registerForm.querySelector('button[type="submit"]');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Account created successfully for ${fullname}! Please login.`);
                window.location.href = 'login.html';
            }, 1500);
        });
    }

    /* --- Social Login Buttons --- */
    const socialBtns = document.querySelectorAll('.btn-social');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Social Login is currently in sandbox mode.');
        });
    });

});
