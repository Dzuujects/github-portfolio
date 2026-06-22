// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact form submission with EmailJS
const contactForm = document.getElementById('contactForm');

// Initialize EmailJS (replace with your public key from EmailJS)
emailjs.init('hoZfSOCEEWIXX90dp');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = contactForm.querySelector('input[name="from_name"]').value;
    const email = contactForm.querySelector('input[name="from_email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;
    const button = contactForm.querySelector('button');

    // Send email using EmailJS
    emailjs.send('service_wy0jyik', 'template_du1vgk8', {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'mddhadhk@gmail.com'
    }).then(
        (response) => {
            // Success
            const originalText = button.textContent;
            button.textContent = 'Message Sent! ✓';
            button.style.background = '#27ae60';

            // Reset form
            contactForm.reset();

            // Restore button after 3 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);

            console.log('Email sent successfully:', response);
        },
        (error) => {
            // Error
            const originalText = button.textContent;
            button.textContent = 'Failed to Send ✗';
            button.style.background = '#e74c3c';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);

            console.error('Failed to send email:', error);
        }
    );
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and skill items
document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});

// Log to console when page loads
console.log('Portfolio page loaded successfully!');
