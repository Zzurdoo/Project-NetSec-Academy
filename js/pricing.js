document.addEventListener('DOMContentLoaded', () => {
    console.log("Pricing Page Loaded");

    const toggleSwitch = document.getElementById('pricing-switch');
    const amounts = document.querySelectorAll('.amount');
    const periods = document.querySelectorAll('.period');

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', () => {
            const isYearly = toggleSwitch.checked;

            // Update Text highlight
            if (isYearly) {
                periods[0].classList.remove('active'); // Monthly
                periods[1].classList.add('active');    // Yearly
            } else {
                periods[0].classList.add('active');
                periods[1].classList.remove('active');
            }

            // Update Prices
            amounts.forEach(amount => {
                if (isYearly) {
                    amount.textContent = amount.getAttribute('data-yearly');
                } else {
                    amount.textContent = amount.getAttribute('data-monthly');
                }
            });
        });
    }
});
