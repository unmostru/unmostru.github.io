document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission
      alert('Thank you for contacting Chikara Dairy Farm! We will get back to you soon.');
      form.reset(); // Clear the form
    });
  }
});


// Animate Navigation Bar on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Stop immediate navigation
    
    const href = this.getAttribute('href');
    
    // Add slide-out animation class
    document.body.classList.add('slide-out');
    
    // After animation duration, navigate to href
    setTimeout(() => {
      window.location.href = href;
    }, 500); // Duration matches CSS animation length
  });
});

