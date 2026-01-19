document.addEventListener('DOMContentLoaded', () => {
    console.log("Edpamstructure Dashboard Loaded");

    // Initialize Vanta.js Effect
    // Check if libraries are loaded
    if (window.VANTA) {
        try {
            VANTA.NET({
                el: "#vanta-bg",
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x00fff2,       // Neon Blue/Cyan
                backgroundColor: 0x050b14, // Matches CSS bg
                points: 15.00,
                maxDistance: 16.00,
                spacing: 17.00
            });
            console.log("Vanta.js initialized");
        } catch (e) {
            console.error("Vanta.js failed to init", e);
        }
    }

    // Google Translate Integration - Fixed Version
    const langBtns = document.querySelectorAll('.lang-btn');

    // Initialize Google Translate (called by Google Translate API)
    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,az',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // Function to detect current language from Google Translate
    function getCurrentLanguage() {
        // Check Google Translate cookie
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'googtrans') {
                // Cookie format is /en/az or /en/en
                if (value.includes('/en/az')) {
                    return 'az';
                }
            }
        }
        // Default to English
        return 'en';
    }

    // Function to update button states based on current language
    function updateButtonStates() {
        const currentLang = getCurrentLanguage();
        langBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang.toLowerCase() === currentLang) {
                btn.classList.add('active');
            }
        });
    }

    // Language button click handlers
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang.toLowerCase();

            // Set cookie for Google Translate
            const expires = new Date();
            expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));

            if (lang === 'az') {
                document.cookie = 'googtrans=/en/az;expires=' + expires.toUTCString() + ';path=/';
            } else {
                document.cookie = 'googtrans=/en/en;expires=' + expires.toUTCString() + ';path=/';
            }

            // Save preference
            localStorage.setItem('selectedLanguage', lang);

            // Reload to apply translation
            location.reload();
        });
    });

    // Update button states on page load and after translation
    window.addEventListener('load', () => {
        // Initial button state update
        updateButtonStates();

        // Monitor for translation changes
        const observer = new MutationObserver(() => {
            updateButtonStates();
        });

        // Observe changes to html element (Google Translate modifies it)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'lang']
        });

        // Also update after a short delay to catch Google Translate initialization
        setTimeout(updateButtonStates, 1000);
        setTimeout(updateButtonStates, 2000);
    });

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const icon = themeBtn.querySelector('i');
            document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                // Morning Mode -> Sun Logo
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                alert('Switched to Morning Mode');
            } else {
                // Night Time -> Moon Logo
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                alert('Switched to Night Mode');
            }
        });
    }

    // Social Icons Interaction (User said "our accounts will open")
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // e.preventDefault(); // Uncomment if we don't want actual navigation yet
            // For now, since href="#", it's not going anywhere, so let's alert
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Opening social media account...');
            }
        });
    });

    // Button interactions
    const actionButtons = document.querySelectorAll('.btn-explore, .btn-secondary, .btn-enroll, .btn-view-all');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // e.preventDefault(); 
            // Mock interaction
            const originalText = btn.innerHTML;

            // Simple bounce
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);

            console.log("Interacted with:", btn.textContent.trim());
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileMenuBtn && mobileNavOverlay && mobileMenuClose) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        const closeMobileMenu = () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        mobileMenuClose.addEventListener('click', closeMobileMenu);

        // Close menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});
