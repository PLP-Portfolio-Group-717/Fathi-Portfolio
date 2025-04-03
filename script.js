
// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formElements = contactForm.elements;
    const name = formElements[0].value;
    const email = formElements[1].value;
    const subject = formElements[2].value;
    const message = formElements[3].value;
    
    // In a real application, you would send this data to a server
    console.log('Form submitted with:', { name, email, subject, message });
    
    // Show success message (in a real app, you'd wait for server response)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });
}

// Simple fade-in animation for sections
const fadeInElements = document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-container');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      // Stop observing the element after it's animated
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Set initial styles and observe elements
fadeInElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(element);
});

// Skill bars animation (if you want to add progress bars to skills)
// This is commented out but you can uncomment if you want to implement skill progress bars
/*
const skillBars = document.querySelectorAll('.skill-progress');

const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const percentage = progressBar.getAttribute('data-percentage');
      progressBar.style.width = percentage;
      observer.unobserve(progressBar);
    }
  });
}, { threshold: 0.1 });

skillBars.forEach(bar => {
  bar.style.width = '0';
  bar.style.transition = 'width 1s ease-in-out';
  progressObserver.observe(bar);
});
*/
