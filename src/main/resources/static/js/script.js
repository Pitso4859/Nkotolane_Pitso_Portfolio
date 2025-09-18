// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the current theme to localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', currentTheme);
});

// Animate Skill Bars on Scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
        body.classList.add('dark-mode');
    }

    // Animate skill bars if on about page
    if (document.querySelector('.skill-progress')) {
        animateSkillBars();
    }

    // Typewriter effect reset for demonstration
    const typewriter = document.querySelector('.typewriter');
    if (typewriter) {
        setInterval(() => {
            typewriter.style.animation = 'none';
            setTimeout(() => {
                typewriter.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
            }, 10);
        }, 8000);
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would normally send the form data to the server
        // For demo purposes, we'll just show the success message
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.style.display = 'flex';
        }
        contactForm.reset();
    });
}
