// Get the form element
const form = document.getElementById('contact-form');

// Add a submit event listener
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const message = form.elements['message'].value.trim();

  // Validate the form data
  let isValid = true;

  // Validate name
  if (name === '') {
    document.getElementById('name-error').textContent = 'Name is required.';
    isValid = false;
  } else {
    document.getElementById('name-error').textContent = '';
  }

  // Validate email
  if (email === '') {
    document.getElementById('email-error').textContent = 'Email is required.';
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById('email-error').textContent = 'Invalid email format.';
    isValid = false;
  } else {
    document.getElementById('email-error').textContent = '';
  }

  // Validate message
  if (message === '') {
    document.getElementById('message-error').textContent = 'Message is required.';
    isValid = false;
  } else {
    document.getElementById('message-error').textContent = '';
  }

  // If the form data is valid, submit the form
  if (isValid) {
    // TODO: Send the form data to the server for processing
    alert('Form submitted successfully!');
    form.reset();
  }
});

// Helper function to validate email format
function isValidEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}



// Get the button element
const backToTopBtn = document.getElementById('back-to-top-btn');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  // Show/hide the button based on scroll position
  if (window.pageYOffset > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Add a click event listener to scroll back to top
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});