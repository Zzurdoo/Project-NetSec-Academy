document.addEventListener('DOMContentLoaded', () => {
    console.log("Contact Page Loaded");

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation check (HTML5 does most of it)
            const btn = contactForm.querySelector('.btn-submit');
            const originalText = btn.innerHTML;

            // Simulate loading
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(() => {
                // Success State
                btn.classList.add('success');
                btn.style.backgroundColor = '#2ecc71';
                btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';

                // Alert user
                alert("Thank you! Your message has been sent. We will get back to you shortly.");
                contactForm.reset();

                // Reset button after delay
                setTimeout(() => {
                    btn.classList.remove('success');
                    btn.style.backgroundColor = ''; // Reset to default CSS
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 3000);

            }, 1500);
        });
    }
});
