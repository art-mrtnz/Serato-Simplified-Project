// Function 1: Rotate product carousel manually
// This function rotates the product carousel to the next or previous slide.
function rotateCarousel(direction) {
    const carousel = document.querySelector('#imageCarousel');
    if (carousel) {
        const bootstrapCarousel = new bootstrap.Carousel(carousel);
        if (direction === 'next') {
            bootstrapCarousel.next();
        } else if (direction === 'prev') {
            bootstrapCarousel.prev();
        }
    }
}

// Function 2: Toggle FAQ Accordion State
// This function toggles the visibility of FAQ answers when a question is clicked.
function toggleFAQ(faqId) {
    const faq = document.getElementById(faqId);
    if (faq) {
        const isCollapsed = faq.classList.contains('show');
        faq.classList.toggle('show', !isCollapsed);
    }
}

// Function 3: Display a contact form submission success message
// This function is triggered when the contact form is submitted.
function submitContactForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert('Thank you for reaching out! We will get back to you soon.');
}

// Function 4: Validate Form Fields
// This function validates a form before submission.
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Name is required.');
        isValid = false;
    }

    // Validate email
    if (!email.value.trim()) {
        showError(email, 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
        showError(message, 'Message is required.');
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally, you can submit the form programmatically here
        // event.target.submit();
    }
}

// Helper function to display error messages
function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '0.9em';
    error.textContent = message;
    input.parentElement.appendChild(error);
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Attach the validation function to the form's submit event
document.getElementById('contactForm').addEventListener('submit', validateForm);

// Function 5: Smooth scrolling to sections
// This function enables smooth scrolling when a navigation link is clicked.
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
