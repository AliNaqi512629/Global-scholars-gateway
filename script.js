// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'white';
    }
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Modal Functionality
const modal = document.getElementById('registrationModal');
const closeModal = document.querySelector('.close-modal');
const registrationForm = document.getElementById('registrationForm');
const registerButtons = document.querySelectorAll('.register-button');

// Open modal when clicking register buttons
registerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const eventCard = button.closest('.event-card');
        const eventTitle = eventCard.querySelector('h3').textContent;
        document.getElementById('eventName').value = eventTitle;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    registrationForm.reset();
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        registrationForm.reset();
    }
});

// Handle registration form submission
registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = registrationForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
        // Get form data
        const formData = {
            access_key: '5201d672-9e0e-4f58-817f-d69b29f28313',
            type: 'event_registration',
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            city: document.getElementById('city').value,
            eventName: document.getElementById('eventName').value
        };

        // Send data to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            // Show thank you modal with personalized message
            const name = document.getElementById('firstName').value;
            showThankYouMessage(`Thank you ${name}! 🌟 We're excited to have you join us for the ${formData.eventName}! We'll send you all the event details shortly. 🎓`);
            // Close modal and reset form
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            registrationForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error submitting your registration. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Register';
    }
});

// Form submission for contact form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        // Get form data
        const formData = {
            access_key: '5201d672-9e0e-4f58-817f-d69b29f28313',
            type: 'contact_form',
            name: contactForm.querySelector('input[name="name"]').value,
            email: contactForm.querySelector('input[name="email"]').value,
            phone: contactForm.querySelector('input[name="phone"]').value,
            destination: contactForm.querySelector('select').value,
            message: contactForm.querySelector('textarea').value
        };

        // Send data to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            // Show thank you modal with personalized message
            const name = formData.name;
            showThankYouMessage(`Thank you ${name}! 🌟 We've received your message and will get back to you soon. We're looking forward to helping you with your study abroad journey! 🎓`);
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

// Thank You Modal Functionality
const thankYouModal = document.getElementById('thankYouModal');
const closeThankYou = document.getElementById('closeThankYou');
const closeThankYouBtn = document.getElementById('closeThankYouBtn');
const thankYouText = document.getElementById('thankYouText');

function showThankYouMessage(message) {
    thankYouText.textContent = message;
    thankYouModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeThankYouModal() {
    thankYouModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeThankYou.addEventListener('click', closeThankYouModal);
closeThankYouBtn.addEventListener('click', closeThankYouModal);

// Close thank you modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === thankYouModal) {
        closeThankYouModal();
    }
});

// Smooth scroll for Safari
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
